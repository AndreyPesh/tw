import Header from '@/src/2_widgets/header/Header';
import React, { Suspense } from 'react';
import Loading from './loading';
import UserAccount from '@/src/1_page/UserAccount';

export const metadata = {
  title: 'Account',
  description: 'User account page',
};

const UserPage = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        {/* <div className="container">User page</div> */}
        <UserAccount />
      </Suspense>
    </>
  );
};

export default UserPage;
