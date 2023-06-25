'use client';

import { GetServerSideProps } from 'next';
import { Session, getServerSession } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

type Props = {
  session?: Session | null;
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ session, children }: Props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export const getServerSideProps: GetServerSideProps<{
  session: Session | null
}> = async () => {
  const session = await getServerSession(authOptions);
  return {
    props: {
      session,
    },
  };
}
