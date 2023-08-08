import React from 'react';
import Header from '../2_widgets/header/Header';
import { getUserData } from '../5_shared/utils/server/fetching/user/data';

const LayoutHeader = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserData();
  return (
    <>
      <Header user={user} />
      {children}
    </>
  );
};

export default LayoutHeader;
