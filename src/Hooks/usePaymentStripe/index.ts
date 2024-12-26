import {useStripe} from '@stripe/stripe-react-native';

export const usePaymentSheet = () => {
  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  const openPaymentSheet = async () => {
    const response = await initPaymentSheet({
      merchantDisplayName: 'Test App',
      paymentIntentClientSecret:
        'pi_3Q**********************_******_*********************pwld',
    });

    if (!response.error) {
      const result = await presentPaymentSheet();
      if (result.error) {
        console.log('Error', result.error.message);
      } else {
        console.log(response);
      }
    }
  };

  return {openPaymentSheet};
};

// stripe payment_intents create --amount=1000 --currency=usd
