import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import Input from '@/src/3_features/input/Input';
import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import MiddleTitle from '@/src/5_shared/titles/MiddleTitle';
import { URL_SIGNUP_PAGE } from '@/src/5_shared/types/constant';
import { LoginFormData } from '@/src/5_shared/types/type';
import { schemaLogin } from './schemas/loginValidate';
import { useState } from 'react';

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(schemaLogin) });

  const onSubmit: SubmitHandler<LoginFormData> = (loginFormData) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 4000);
    console.log(loginFormData);
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <MiddleTitle>Sign in to your account</MiddleTitle>
      <form className="space-y-1" onSubmit={handleSubmit(onSubmit)} noValidate>
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
        <Button
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
