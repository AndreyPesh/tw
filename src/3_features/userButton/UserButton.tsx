'use client';
import { MouseEvent } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { EnumLinkPage } from '@/src/5_shared/types/enum';

const UserButton = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const userImage =
    session && session.user?.image ? session.user.image : './avatar.svg';

  const onSignOut = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    signOut({ callbackUrl: EnumLinkPage.HOME });
  };

  return (
    <div
      onClick={() => router.push(EnumLinkPage.USER)}
      className="flex items-center justify-around cursor-pointer border-t"
    >
      <div className='p-2 inline-flex items-center hover:shadow-sm'>
        <Image priority alt="user" width={48} height={48} src={userImage} />
        <p className='ml-2 text-sm'>
          {session && session.user ? (
            <span>{session.user.name}</span>
          ) : (
            <span>Username</span>
          )}
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
