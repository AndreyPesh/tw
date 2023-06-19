import AuthButton from '@/src/3_features/authButton/AuthButton';
import Navigation from '@/src/3_features/navigation/Navigation';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full px-20 py-5 flex justify-between items-center border-b border-b-light">
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
    </header>
  );
};

export default Header;
