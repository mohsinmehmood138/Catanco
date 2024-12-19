import * as Yup from 'yup';


export const isValidPhoneNumber = (phoneNumber: string) => {
  const phoneRegex = /^[0-9]{9,14}$/; 
  return phoneRegex.test(phoneNumber);
};

interface SignUpProps {
  phoneNumber: string;
  code: string;
}
interface phoneNumberProps{
    phoneNumber:string
}

const phoneNumberValue :phoneNumberProps={
phoneNumber:""
}



const signUpValue: SignUpProps = {
  phoneNumber: '',
  code: '',
};

const signUpValidationSchema = Yup.object({
  phoneNumber: Yup.string()
    .matches(/^[0-9]{9,14}$/, 'Phone number must be between 9 and 14 digits') 
    .required('Phone number is required'),

  code: Yup.string()
    .required('Code is required')
    .matches(/^[0-9]*$/, 'Code must contain only numbers'),
});

const phoneNumberSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^[0-9]{9,14}$/, 'Phone number must be between 9 and 14 digits') 
      .required('Phone number is required'),
  
  
  });

export { signUpValidationSchema, signUpValue ,phoneNumberSchema };
