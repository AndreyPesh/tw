import * as yup from 'yup';
import {
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_NAME_USER,
  MIN_LENGTH_PASSWORD,
  REG_EXP_EMAIL,
  REG_EXP_USER_NAME,
} from './constant/constant';

export const schemaSignup = yup.object().shape({
  name: yup
    .string()
    .required('Field is required')
    .min(
      MIN_LENGTH_NAME_USER,
      `Min length your name ${MIN_LENGTH_NAME_USER} symbols`
    )
    .matches(REG_EXP_USER_NAME, 'Invalid user name'),
  email: yup
    .string()
    .required('Field is required')
    .matches(REG_EXP_EMAIL, 'Email is not valid'),
  password: yup
    .string()
    .required('Field is required')
    .min(
      MIN_LENGTH_PASSWORD,
      `Min length password ${MIN_LENGTH_PASSWORD} symbols`
    )
    .max(
      MAX_LENGTH_PASSWORD,
      `Max length password ${MAX_LENGTH_PASSWORD} symbols`
    ),
  confirmPassword: yup
    .string()
    .required('Field is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
