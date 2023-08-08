import Header from '@/src/2_widgets/header/Header';
import React, { Suspense } from 'react';
import Loading from './loading';
import { getUserData } from '@/src/5_shared/utils/server/fetching/user/data';

export const metadata = {
  title: 'Contacts',
  description: 'Contacts page looks count',
};

const ContactsPage = async () => {
  const userData = await getUserData();
  return (
    <>
      <Header user={userData} />
      <Suspense fallback={<Loading />}>
        <div className='container'>Contacts</div>
      </Suspense>
    </>
  );
};

export default ContactsPage;
