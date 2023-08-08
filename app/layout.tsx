import { Inter } from 'next/font/google';
import '@/src/5_shared/styles/globals.css';
import { ProviderRedux } from '@/src/5_shared/store/provider';
import { NextAuthProvider } from '@/src/5_shared/providers/authProvider';
import LayoutHeader from '@/src/1_page/LayoutHeader';

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
        <ProviderRedux>
          <NextAuthProvider>
            <LayoutHeader>{children}</LayoutHeader>
          </NextAuthProvider>
        </ProviderRedux>
      </body>
    </html>
  );
}
