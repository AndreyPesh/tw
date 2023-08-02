import prisma from '@/global.d';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Empty from './Empty';
import Account from '../2_widgets/account/Account';
import { authOptions } from '../5_shared/utils/server/auth';
import { EnumLinkPage } from '../5_shared/types/enum';

const getDataUser = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) {
    redirect(EnumLinkPage.AUTH);
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
