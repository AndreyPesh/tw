import { useRouter } from 'next/navigation';
import Input from '@/src/3_features/input/Input';
import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import MiddleTitle from '@/src/5_shared/titles/MiddleTitle';
import { URL_SIGNUP_PAGE } from '@/src/5_shared/types/constant';

const LoginForm = () => {
  const router = useRouter();
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <MiddleTitle>Sign in to your account</MiddleTitle>
      <form className="space-y-6">
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          label="Email Address"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
        />
        <Button type="submit" variant={EnumTypeButton.PRIMARY}>
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
