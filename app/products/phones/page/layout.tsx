import { ReactNode } from 'react';

import FilterForm from '@/src/4_features/phones/filter/FilterForm';

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
