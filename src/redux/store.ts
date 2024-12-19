import {persistStore, persistReducer} from 'redux-persist';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authSlice from './authSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authSlice'],
};

const rootReducer = combineReducers({
  authSlice,
  [authSlice.reducerPath]: authSlice.reducer,
  //   [searchSlice.reducerPath]:searchSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(
      authSlice.middleware,
      // apiSlice.middleware ,searchSlice.middleware
    ),
});

export type RootState = ReturnType<typeof rootReducer>;

const persistor = persistStore(store);

export {store, persistor};
