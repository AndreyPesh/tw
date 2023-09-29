import { schemaLogin } from '@/src/3_widgets/forms/schemas/loginValidate';
import { schemaSignup } from '@/src/3_widgets/forms/schemas/signupValidate';
import { LoginFormData, SignupFormData } from '@/src/6_shared/types/type';

export const validateSignupData = async (data: SignupFormData) => {
  const isValidFormData = await schemaSignup.isValid(data);
  const errors: string[] = [];

  if (!isValidFormData) {
    try {
      await schemaSignup.validate(data);
    } catch (error) {
      errors.push(...(error as { errors: string[] }).errors);
    }
  }
  return errors;
};

export const validateLoginData = async (data: LoginFormData) => {
  const isValidFormData = await schemaLogin.isValid(data);
  const errors: string[] = [];

  if (!isValidFormData) {
    try {
      await schemaLogin.validate(data);
    } catch (error) {
      errors.push(...(error as { errors: string[] }).errors);
    }
  }
  return errors;
};
