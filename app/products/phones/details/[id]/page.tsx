import React from 'react';
import Empty from '@/src/1_page/Empty';
import Carousel from '@/src/3_features/carousel/Carousel';
import { getPhoneDataById } from '@/src/5_shared/utils/server/fetching/phone/data';

const PhoneDetailPage = async ({ params }: { params: { id: string } }) => {
  const phoneData = await getPhoneDataById(params.id);

  return (
    <>
      {phoneData && phoneData.data ? (
        <div className="container">
          Phone detail {params.id} <h1>{phoneData.data.brand[0].list.name}</h1>
          <Carousel
            listUrlImage={phoneData.data.images.map(
              (imageData) => imageData.url
            )}
          />
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default PhoneDetailPage;
