import { Inter } from 'next/font/google';

import '@/src/1_app/styles/globals.css';

import { NextAuthProvider } from '@/src/1_app/providers/NextAuthProvider';
import QueryProvider from '@/src/1_app/providers/QueryProvider';
import { ReduxProvider } from '@/src/1_app/store/ReduxProvider';
import HeaderLayout from '@/src/1_app/layouts/HeaderLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lookscout',
  description: 'Main page looks count',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-[calc(100vh-67px)]`}>
        <ReduxProvider>
          <NextAuthProvider>
            <QueryProvider>
              <HeaderLayout>{children}</HeaderLayout>
            </QueryProvider>
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
