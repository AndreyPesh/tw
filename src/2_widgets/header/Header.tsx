'use client';
import AuthButton from '@/src/3_features/authButton/AuthButton';
import BurgerButton from '@/src/3_features/burger/BurgerButton';
import Navigation from '@/src/3_features/navigation/Navigation';
import UserButton from '@/src/3_features/userButton/UserButton';
import { useActions } from '@/src/5_shared/hooks/useActions';
import { useAppSelector } from '@/src/5_shared/store/hooks/redux';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const active = useAppSelector((state) => state.burger.active);
  const { toggle } = useActions();
  const isAuth = false;

  return (
    <header className="relative w-full px-5 md:px-20 py-2 md:py-0 flex justify-between items-center border-b border-b-light">
      <Link href="/">
        <Image priority width={160} height={40} src={'./logo.svg'} alt="Logo" />
      </Link>
      <div
        onClick={() => toggle()}
        className={classNames(
          'absolute top-[67px] right-0 w-full h-[calc(100vh-67px)] flex flex-col justify-between bg-white md:flex-row md:relative md:top-0 md:left-0 md:h-auto md:w-2/3 duration-200',
          {
            'left-0': active,
            'left-[-100vw]': !active,
          }
        )}
      >
        <Navigation />
        {isAuth ? <UserButton /> : <AuthButton />}
      </div>
      <BurgerButton />
    </header>
  );
};

export default Header;
