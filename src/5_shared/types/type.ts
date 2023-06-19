import { UseFormRegister, FieldErrors } from 'react-hook-form';

export type LoginFormData = {
  email: string;
  password: string;
};

export type SignupFormData = LoginFormData & {
  name: string;
  confirmPassword: string;
};

export type RegisterLoginFormData = ReturnType<UseFormRegister<LoginFormData>>;
export type RegisterSignupFormData = ReturnType<UseFormRegister<SignupFormData>>;

