import { Suspense } from 'react';
import Loading from './loading';
import UserAccount from '@/src/1_page/UserAccount';

export const metadata = {
  title: 'Account',
  description: 'User account page',
};

const UserPage = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <UserAccount />
      </Suspense>
    </>
  );
};

export default UserPage;
