import React from 'react';
import { getPhoneDataById } from '@/src/5_shared/utils/server/fetching/phone/data';

const PhoneDetailPage = async ({ params }: { params: { id: string } }) => {
  const phoneData = await getPhoneDataById(params.id);

  return (
    <div className="container">
      Phone detail {params.id} <h1>{phoneData?.data.brand[0].list.name}</h1>
    </div>
  );
};

export default PhoneDetailPage;
