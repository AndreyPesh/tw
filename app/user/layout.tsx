import { ReactNode } from 'react';
import UserNavigation from '@/src/3_features/userData/navigation/UserNavigation';

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <UserNavigation />
      {children}
    </div>
  );
}
