import { FC } from 'react';
import Image from 'next/image';
import { UNKNOWN_BRAND_NAME } from '../constants';
import { PhoneData } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import Rating from '@/src/5_shared/UI/rating/Rating';

const PhoneCard: FC<{ data: PhoneData }> = ({ data }) => {
  const { model, images, rating } = data;
  const previewImageSrc = images[0].url;
  const brandName = data.brand[0].list.name
    ? data.brand[0].list.name
    : UNKNOWN_BRAND_NAME;

  return (
    <div className="p-5 w-full sm:max-w-xs box-border text-sm border rounded-lg cursor-pointer hover:shadow-lg">
      <Image
        src={previewImageSrc}
        width={500}
        height={500}
        alt={`Phone ${brandName} ${model}`}
      />
      <h3>
        <b>{brandName}</b>
      </h3>
      <h3>{model}</h3>
      <div>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default PhoneCard;
