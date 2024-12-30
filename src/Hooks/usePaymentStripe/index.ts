import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useStripe, CardFieldInput} from '@stripe/stripe-react-native';

export const usePaymentSheet = () => {
  const {createToken} = useStripe();
  const [cardComplete, setCardComplete] = useState(false);
  const [cardDetails, setCardDetails] = useState<CardFieldInput.Details>();

  const handleCardChange = (details: CardFieldInput.Details) => {
    setCardDetails(details);

    const isComplete = Boolean(
      details.numberComplete &&
        details.validNumber &&
        details.expiryComplete &&
        details.validExpiryDate &&
        details.cvcComplete &&
        details.validCVC,
    );

    console.log('Is card complete?', isComplete);
    setCardComplete(isComplete);
  };

  const handleGenerateToken = async () => {
    try {
      const {token, error} = await createToken({
        type: 'Card',
      });

      if (error) {
        console.log('Token Error:', error);
        Alert.alert('Error', error.message);
      } else if (token) {
        console.log('Token Success:', token);
        Alert.alert('Success', `Token created: ${token.id}`);
        return token;
      }
    } catch (err) {
      console.error('Token Creation Error:', err);
      Alert.alert('Error', 'Failed to process payment');
    }
  };

  return {
    handleGenerateToken,
    handleCardChange,
    cardComplete,
    cardDetails,
  };
};
