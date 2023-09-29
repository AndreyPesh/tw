import * as yup from 'yup';
import {
  MAX_LENGTH_NAME_USER,
  MIN_LENGTH_NAME_USER,
  REG_EXP_EMAIL,
} from './constant/constant';

export const userNameSchema = yup.object().shape({
  name: yup
    .string()
    .min(
      MIN_LENGTH_NAME_USER,
      `Min length name ${MIN_LENGTH_NAME_USER} symbols`
    )
    .max(
      MAX_LENGTH_NAME_USER,
      `Max length name ${MAX_LENGTH_NAME_USER} symbols`
    )
    .required('Name is required'),
});

export const userEmailSchema = yup.object().shape({
  email: yup
    .string()
    .required('Field is required')
    .matches(REG_EXP_EMAIL, 'Email is not valid'),
});
