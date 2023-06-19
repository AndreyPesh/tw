import { UseFormRegister, FieldErrors } from 'react-hook-form';

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegisterLoginFormData = ReturnType<UseFormRegister<LoginFormData>>;
export type RegisterLoginFormErrors = FieldErrors<LoginFormData>;
