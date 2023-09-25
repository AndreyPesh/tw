import { Suspense } from 'react';
import Loading from './loading';
import Empty from '@/src/1_page/Empty';
import PersonalData from '@/src/2_widgets/user/PersonalData';
import { getUserData } from '@/src/5_shared/utils/server/fetching/user/data';

export const metadata = {
  title: 'Account',
  description: 'User account page',
};

const UserPersonalData = async () => {
  const user = await getUserData();
  if (!user) {
    return <Empty />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <PersonalData {...user} />
    </Suspense>
  );
};

export default UserPersonalData;
