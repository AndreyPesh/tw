import { getServerSession } from 'next-auth';
import prisma from '@/global.d';
import { Prisma } from '@prisma/client';
import { authOptions } from '@/src/6_shared/utils/server/auth';

type UserWithCart = Prisma.UserGetPayload<{
  include: { cart: true };
}>;

export type UserData = Omit<UserWithCart, 'password'>;

export async function getUserData(): Promise<UserData | null> {
  const session = await getServerSession(authOptions);
  if (session && session.user && session.user.email) {
    const user: UserWithCart | null = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      include: {
        cart: true,
      },
    });
    if (user) {
      const { password, ...userData } = user;
      return userData;
    }
  }
  return null;
}
