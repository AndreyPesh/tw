import Header from '@/src/2_widgets/header/Header';
import React, { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
  title: 'Contacts',
  description: 'Contacts page looks count',
};

const ContactsPage = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <div className='container'>Contacts</div>
      </Suspense>
    </>
  );
};

export default ContactsPage;
