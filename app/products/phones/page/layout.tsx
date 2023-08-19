import FilterForm from '@/src/3_features/phones/filter/FilterForm';
import { ReactNode } from 'react';

const PhonePageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container flex">
      <FilterForm />
      {children}
    </div>
  );
};

export default PhonePageLayout;
