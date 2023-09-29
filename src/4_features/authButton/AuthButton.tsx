'use client';

import { useRouter } from 'next/navigation';
import Button from '@/src/6_shared/buttons/Button';
import { EnumTypeButton } from '@/src/6_shared/buttons/types/enums';
import { URL_LOGIN_PAGE, URL_SIGNUP_PAGE } from '@/src/6_shared/types/constant';

const AuthButton = () => {
  const router = useRouter();
  return (
    <div className="self-center mb-10 md:mb-0 [&>*:last-child]:ml-6">
      <Button
        variant={EnumTypeButton.TRANSPARENT}
        handler={() => router.push(URL_SIGNUP_PAGE)}
      >
        Sign up
      </Button>
      <Button
        variant={EnumTypeButton.PRIMARY}
        handler={() => router.push(URL_LOGIN_PAGE)}
      >
        Log in
      </Button>
    </div>
  );
};

export default AuthButton;
