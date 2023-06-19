import * as yup from 'yup';

const MIN_LENGTH_PASSWORD = 6;
const MAX_LENGTH_PASSWORD = 32;
const REG_EXP_EMAIL =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
