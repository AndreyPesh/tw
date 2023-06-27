import Header from '@/src/2_widgets/header/Header';
import React, { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
  title: 'Account',
  description: 'User account page',
};

const UserPage = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <div className="container">User page</div>
      </Suspense>
    </>
  );
};

export default UserPage;
