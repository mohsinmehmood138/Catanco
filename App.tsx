/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './src/navigation';
import {SharedStateProvider} from './src/hooks';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {StripeProvider} from '@stripe/stripe-react-native';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SharedStateProvider>
        <StripeProvider publishableKey="pk_test_51QaDDQGOseHptfKrrR2eALw5EbTCPTSzSDc0X4rksy8qreXbK1GZJWgHQXaYGo1fTSWrg97vmY3an2RUFR7C84pl00vYHe40yG">
          <AppNavigator />
        </StripeProvider>
      </SharedStateProvider>
    </Provider>
  );
}

export default App;
