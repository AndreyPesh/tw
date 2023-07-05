import prisma from '@/global.d';
import { getServerSession } from 'next-auth';
import Empty from './Empty';
import Account from '../2_widgets/account/Account';
import { authOptions } from '../5_shared/utils/server/auth';

const getDataUser = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) {
    return null;
  }

  const data = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  return data;
};

const UserAccount = async () => {
  const user = await getDataUser();
  if (!user) {
    return <Empty />;
  }

  return <Account {...user} />;
};

export default UserAccount;
