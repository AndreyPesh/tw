import Auth from '@/src/2_page/Auth';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
  title: 'Sign in',
};

const AuthPage = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Auth />
      </Suspense>
    </>
  );
};

export default AuthPage;
