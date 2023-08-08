import Header from '@/src/2_widgets/header/Header';
import { Suspense } from 'react';
import Loading from './loading';
import UserAccount from '@/src/1_page/UserAccount';
import { getUserData } from '@/src/5_shared/utils/server/fetching/user/data';

export const metadata = {
  title: 'Account',
  description: 'User account page',
};

const UserPage = async () => {
  const user = await getUserData();
  return (
    <>
      <Header user={user} />
      <Suspense fallback={<Loading />}>
        <UserAccount />
      </Suspense>
    </>
  );
};

export default UserPage;
