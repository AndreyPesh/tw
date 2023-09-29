'use client';

import { MouseEvent } from 'react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DEFAULT_NAME_AVATAR } from '@/src/6_shared/types/constant';
import { UserData } from '@/src/6_shared/utils/server/fetching/user/data';
import { EnumLinkPage } from '@/src/6_shared/constants/main_navigation/enums';

const UserButton = ({ user }: { user: UserData }) => {
  const router = useRouter();
  const { name, image } = user;
  const userImage: string = image ? image : DEFAULT_NAME_AVATAR;

  const onSignOut = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    signOut({ callbackUrl: EnumLinkPage.HOME });
  };

  return (
    <div
      onClick={() => router.push(EnumLinkPage.USER)}
      className="flex items-center justify-around cursor-pointer border-t select-none"
    >
      <div className="p-2 inline-flex items-center hover:shadow-sm">
        <Image priority alt="user" width={48} height={48} src={userImage} className='w-[48px] h-[48px] object-fill' />
        <p className="ml-2 text-sm">
          <span>{name}</span>
        </p>
      </div>
      <span
        onClick={onSignOut}
        className="ml-5 inline-flex w-[30px] h-[30px] bg-logout bg-no-repeat bg-center bg-color-white hover:bg-logout-hover"
      ></span>
    </div>
  );
};

export default UserButton;
