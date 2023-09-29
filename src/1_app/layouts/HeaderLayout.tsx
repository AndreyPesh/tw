import { ReactNode } from 'react';
import Header from '../../3_widgets/header/Header';
import { getUserData } from '../../6_shared/utils/server/fetching/user/data';

const HeaderLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getUserData();
  return (
    <>
      <Header user={user} />
      {children}
    </>
  );
};

export default HeaderLayout;
