import Header from '@/src/2_widgets/header/Header';
import '@/src/5_shared/styles/globals.css';
import { Inter } from 'next/font/google';
import { ProviderRedux } from '@/src/5_shared/store/provider';
import { NextAuthProvider } from '@/src/5_shared/providers/authProvider';
import { SessionProvider } from 'next-auth/react';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lookscout',
  description: 'Main page looks count',
};

export default function RootLayout({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderRedux>
          <>
            <NextAuthProvider>
            {/* <SessionProvider session={session}> */}
              <Header />
              {children}
            {/* </SessionProvider> */}
            </NextAuthProvider>
          </>
        </ProviderRedux>
      </body>
    </html>
  );
}

