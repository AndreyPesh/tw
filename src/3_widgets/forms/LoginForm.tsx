import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@/src/4_features/input/Input';
import Button from '@/src/6_shared/buttons/Button';
import { EnumTypeButton } from '@/src/6_shared/buttons/types/enums';
import MiddleTitle from '@/src/6_shared/UI/titles/MiddleTitle';
import { URL_SIGNUP_PAGE } from '@/src/6_shared/types/constant';
import { LoginFormData } from '@/src/6_shared/types/type';
import { schemaLogin } from './schemas/loginValidate';
import { EnumLinkPage } from '@/src/6_shared/types/enum';

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(schemaLogin) });

  const onSubmit: SubmitHandler<LoginFormData> = async (loginFormData) => {
    setLoading(true);
    setError('');
    const response = await signIn('credentials', {
      redirect: false,
      email: loginFormData.email,
      password: loginFormData.password,
    });
    if (response?.error) {
      setError(response.error);
      setLoading(false);
      return;
    }
    if (response?.url) {
      router.refresh();
      router.push(EnumLinkPage.HOME);
    }

    setLoading(false);
  };

  return (
    <div className="mt-10 mx-auto w-3/4 sm:w-full sm:max-w-sm">
      <MiddleTitle>Sign in to your account</MiddleTitle>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)} noValidate>
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
        {error && <span className="block text-red text-center">{error}</span>}
        <Button
          styles="w-full sm:w-40"
          type="submit"
          variant={EnumTypeButton.PRIMARY}
          isLoading={loading}
        >
          Log in
        </Button>
      </form>
      <div className="mt-5 inline-flex justify-between items-center text-gray-500">
        <h3>Don't have an account?</h3>
        <Button
          variant={EnumTypeButton.OUTLINE}
          handler={() => {
            router.push(URL_SIGNUP_PAGE);
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
