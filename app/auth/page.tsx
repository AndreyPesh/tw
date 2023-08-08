import Auth from '@/src/1_page/Auth';
import Header from '@/src/2_widgets/header/Header';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
  title: 'Sign in',
};

const AuthPage = () => {
  return (
    <>
      <Header user={null} />
      <Suspense fallback={<Loading />}>
        <Auth />
      </Suspense>
    </>
  );
};

export default AuthPage;
