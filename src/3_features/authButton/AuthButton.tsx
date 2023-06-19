'use client';

import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import { URL_LOGIN_PAGE, URL_SIGNUP_PAGE } from '@/src/5_shared/types/constant';
import { useRouter } from 'next/navigation';

const AuthButton = () => {
  const router = useRouter();
  return (
    <div className="[&>*:last-child]:ml-6">
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
