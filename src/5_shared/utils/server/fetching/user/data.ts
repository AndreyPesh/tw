import { getServerSession } from 'next-auth';
import { authOptions } from '@/src/5_shared/utils/server/auth';
import prisma from '@/global.d';
import { User } from '@prisma/client';

export async function getUserData() {
  const session = await getServerSession(authOptions);
  if (session && session.user && session.user.email) {
    const user: User | null = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    if (user) {
      return user;
    }
  }
  return null;
}
