import { ReactNode } from 'react';
import UserNavigation from '@/src/4_features/userData/navigation/UserNavigation';

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container pb-[70px] sm:pb-0 flex flex-col sm:flex-row justify-between">
      <UserNavigation />
      {children}
    </div>
  );
}
