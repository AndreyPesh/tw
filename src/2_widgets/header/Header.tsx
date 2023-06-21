import AuthButton from '@/src/3_features/authButton/AuthButton';
import BurgerButton from '@/src/3_features/burger/BurgerButton';
import Navigation from '@/src/3_features/navigation/Navigation';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full px-10 md:px-20 py-5 flex justify-between items-center border-b border-b-light">
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
      <div className='hidden md:flex w-2/3 justify-between'>
        <Navigation />
        <AuthButton />
      </div>
      <BurgerButton />
      <span className='md:hidden'>Menu</span>
    </header>
  );
};

export default Header;
