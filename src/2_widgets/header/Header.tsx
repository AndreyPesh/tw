'use client';

import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import AuthButton from '@/src/3_features/authButton/AuthButton';
import BurgerButton from '@/src/3_features/burger/BurgerButton';
import Navigation from '@/src/3_features/navigation/Navigation';
import UserButton from '@/src/3_features/userButton/UserButton';
import { useActions } from '@/src/5_shared/hooks/useActions';
import { useAppSelector } from '@/src/5_shared/store/hooks/redux';
import { EnumLinkPage } from '@/src/5_shared/types/enum';
import { UserData } from '@/src/5_shared/utils/server/fetching/user/data';
import Cart from '@/src/3_features/cart/Cart';

const Header = ({ user }: { user: UserData | null }) => {
  const active = useAppSelector((state) => state.burger.active);
  const { toggle } = useActions();

  return (
    <header className="border-b border-b-light">
      <div className="container mx-auto w-full py-2 md:py-0 flex justify-between items-center">
        <Link href={EnumLinkPage.HOME}>
          <Image
            priority
            width={160}
            height={40}
            src={'/logo.svg'}
            alt="Logo"
          />
        </Link>
        <div
          onClick={() => toggle()}
          className={classNames(
            'absolute top-[67px] right-0 w-full h-[calc(100%-67px)] flex flex-col justify-between bg-white md:flex-row md:relative md:top-0 md:left-0 md:h-auto md:w-2/3 duration-200 z-10',
            {
              'left-0': active,
              'left-[-100vw]': !active,
            }
          )}
        >
          <Navigation />
          <Cart />
          {user ? <UserButton user={user} /> : <AuthButton />}
        </div>
        <BurgerButton />
      </div>
    </header>
  );
};

export default Header;
