import AuthButton from '@/src/3_features/authButton/AuthButton';
import BurgerButton from '@/src/3_features/burger/BurgerButton';
import Navigation from '@/src/3_features/navigation/Navigation';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative w-full px-10 md:px-20 py-2 md:py-0 flex justify-between items-center border-b border-b-light">
      {/* <div>
        <div className="w-1/2 flex justify-between">
          <Link href="/">
            <Image
              priority
              width={160}
              height={40}
              src={'./logo.svg'}
              alt="Logo"
            />
          </Link>
          <Navigation />
        </div>
        <AuthButton />
      </div> */}
      <Link href="/">
        <Image priority width={160} height={40} src={'./logo.svg'} alt="Logo" />
      </Link>
      <div className="absolute top-[67px] right-0 w-screen h-[calc(100vh-67px)] flex flex-col justify-between bg-white md:flex-row md:relative md:top-0 md:h-auto md:w-2/3">
        <Navigation />
        <AuthButton />
      </div>
      <BurgerButton />
    </header>
  );
};

export default Header;
