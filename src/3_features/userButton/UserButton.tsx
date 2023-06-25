'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const UserButton = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
  
  return (
    <div
      onClick={() => router.push('user')}
      className="flex items-center cursor-pointer"
    >
      <Image priority alt="user" width={48} height={48} src={'./avatar.svg'} />
      <p>
        Username
        <span></span>
      </p>
      <span
        onClick={() => signOut()}
        className="ml-5 inline-flex w-[30px] h-[30px] bg-logout bg-no-repeat bg-center bg-color-white hover:bg-logout-hover"
      ></span>
    </div>
  );
};

export default UserButton;
