/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {StripeProvider} from '@stripe/stripe-react-native';
import {store} from './src/redux/store';
import AppNavigator from './src/navigation';
import {SharedStateProvider} from './src/hooks';

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
