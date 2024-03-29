import * as yup from 'yup';
import {
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_PASSWORD,
  REG_EXP_EMAIL,
} from './constant/constant';

export const schemaLogin = yup.object().shape({
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
});
