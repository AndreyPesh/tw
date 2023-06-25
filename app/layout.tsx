import Header from '@/src/2_widgets/header/Header';
import '@/src/5_shared/styles/globals.css';
import { Inter } from 'next/font/google';
import { ProviderRedux } from '@/src/5_shared/store/provider';
import { NextAuthProvider } from '@/src/5_shared/providers/authProvider';

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
      <body className={inter.className}>
        <ProviderRedux>
          <>
            <NextAuthProvider>
              <Header />
              {children}
            </NextAuthProvider>
          </>
        </ProviderRedux>
      </body>
    </html>
  );
}

// export async function getServerSideProps(ctx) {
//   return {
//     props: {
//       session: await getSession(ctx)
//     }
//   }
// }