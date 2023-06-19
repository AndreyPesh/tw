'use client';

import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import { TYPE_AUTH_PARAM } from '@/src/5_shared/types/constant';
import { EnumLinkPage, EnumTypeAuth } from '@/src/5_shared/types/enum';
import { useRouter } from 'next/navigation';

const URL_AUTH_PAGE = `${EnumLinkPage.AUTH}?${TYPE_AUTH_PARAM}=`;

const AuthButton = () => {
  const router = useRouter();
  return (
    <div className="[&>*:last-child]:ml-6">
      <Button
        type={EnumTypeButton.TRANSPARENT}
        handler={() => router.push(`${URL_AUTH_PAGE}${EnumTypeAuth.SIGNUP}`)}
      >
        Sign up
      </Button>
      <Button
        type={EnumTypeButton.PRIMARY}
        handler={() => router.push(`${URL_AUTH_PAGE}${EnumTypeAuth.LOGIN}`)}
      >
        Log in
      </Button>
    </div>
  );
};

export default AuthButton;
