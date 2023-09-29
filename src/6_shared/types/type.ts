import { UseFormRegister } from 'react-hook-form';

export type LoginFormData = {
  email: string;
  password: string;
};

export type SignupFormData = LoginFormData & {
  name: string;
  confirmPassword: string;
};

export type RegisterLoginFormData = ReturnType<UseFormRegister<LoginFormData>>;
export type RegisterSignupFormData = ReturnType<
  UseFormRegister<SignupFormData>
>;

export type EntriesObjectType<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
