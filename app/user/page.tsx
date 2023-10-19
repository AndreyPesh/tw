import { Suspense } from 'react';
import Loading from './loading';
import Empty from '@/src/6_shared/UI/empty/Empty';
import PersonalData from '@/src/3_widgets/user/PersonalData';
import { getUserData } from '@/src/6_shared/utils/server/fetching/user/data';

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
