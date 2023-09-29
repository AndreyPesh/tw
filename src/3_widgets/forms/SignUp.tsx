'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MiddleTitle from '@/src/6_shared/titles/MiddleTitle';
import Input from '@/src/4_features/input/Input';
import { EnumTypeButton } from '@/src/6_shared/buttons/types/enums';
import Button from '@/src/6_shared/buttons/Button';
import { URL_LOGIN_PAGE } from '@/src/6_shared/types/constant';
import { SignupFormData } from '@/src/6_shared/types/type';
import { schemaSignup } from './schemas/signupValidate';
import { signIn } from 'next-auth/react';
import { Auth } from '@/src/6_shared/service/auth/Auth';
import { ResponseStatus } from '@/src/6_shared/utils/server/types/enum';
import { EnumLinkPage } from '@/src/6_shared/types/enum';

const SignupForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({ resolver: yupResolver(schemaSignup) });

  const onSubmit: SubmitHandler<SignupFormData> = async (loginFormData) => {
    setLoading(true);
    setError('');
    const response = await Auth.signup(loginFormData);

    if (response && response.status === ResponseStatus.BAD_REQUEST) {
      response.message && setError(response.message);
      setLoading(false);
      return;
    } else if (response?.status === ResponseStatus.OK) {
      await signIn('credentials', {
        email: loginFormData.email,
        password: loginFormData.password,
        callbackUrl: EnumLinkPage.HOME,
      });
    }

    setError('');
    setLoading(false);
  };

  return (
    <div className="mt-10 mx-auto w-3/4 sm:w-full sm:max-w-sm">
      <MiddleTitle>Register an account</MiddleTitle>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          name="name"
          type="text"
          placeholder="Name or Nick"
          label="Your Name or Nick"
          register={register('name')}
          error={errors.name}
        />
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          label="E-mail Address"
          register={register('email')}
          error={errors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
          register={register('password')}
          error={errors.password}
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          label="Confirm password"
          register={register('confirmPassword')}
          error={errors.confirmPassword}
        />
        {error && <span className="block text-red text-center">{error}</span>}
        <Button
          styles="w-full sm:w-40"
          type="submit"
          variant={EnumTypeButton.PRIMARY}
          isLoading={loading}
        >
          Sign Up
        </Button>
      </form>
      <div className="mt-5 inline-flex justify-between items-center text-gray-500">
        <h3>Do you have an account?</h3>
        <Button
          variant={EnumTypeButton.OUTLINE}
          handler={() => {
            router.push(URL_LOGIN_PAGE);
          }}
        >
          Log in
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;
