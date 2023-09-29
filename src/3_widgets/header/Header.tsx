'use client';

import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { useActions, useAppSelector } from '@/src/1_app/store/hooks/redux';
import AuthButton from '@/src/4_features/authButton/AuthButton';
import BurgerButton from '@/src/4_features/burger/BurgerButton';
import Navigation from '@/src/4_features/navigation/Navigation';
import UserButton from '@/src/4_features/userButton/UserButton';
import CartIcon from '@/src/4_features/cart/CartIcon';
import { EnumLinkPage } from '@/src/6_shared/types/enum';
import { UserData } from '@/src/6_shared/utils/server/fetching/user/data';

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
            'absolute top-[81px] right-0 w-full h-[calc(100%-81px)] flex flex-col justify-between bg-white md:flex-row md:relative md:top-0 md:left-0 md:h-auto md:w-2/3 duration-200 z-20',
            {
              'left-0': active,
              'left-[-100vw]': !active,
            }
          )}
        >
          <Navigation />
          <CartIcon styles="hidden md:inline-flex" />
          {user ? <UserButton user={user} /> : <AuthButton />}
        </div>
        <CartIcon styles="md:hidden" />
        <BurgerButton />
      </div>
    </header>
  );
};

export default Header;
