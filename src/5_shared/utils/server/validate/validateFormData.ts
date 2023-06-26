import { schemaSignup } from '@/src/2_widgets/forms/schemas/signupValidate';
import { SignupFormData } from '@/src/5_shared/types/type';

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
