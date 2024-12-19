/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './src/navigation';
import {SharedStateProvider} from './src/Hooks';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SharedStateProvider>
        <AppNavigator />
      </SharedStateProvider>
    </Provider>
  );
}

export default App;
