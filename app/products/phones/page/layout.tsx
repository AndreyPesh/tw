import FilterForm from '@/src/3_features/phones/filter/FilterForm';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Products',
  description: 'Products page',
};

const PhonePageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container flex flex-col">
      <FilterForm />
      {children}
    </div>
  );
};

export default PhonePageLayout;
