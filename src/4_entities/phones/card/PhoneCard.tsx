'use client';

import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { UNKNOWN_BRAND_NAME } from '../constants';
import { PhoneData } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import Rating from '@/src/5_shared/UI/rating/Rating';
import AddToCartButton from '@/src/5_shared/UI/buttons/AddToCartButton';

const PhoneCard: FC<{ data: PhoneData }> = ({ data }) => {
  const router = useRouter();
  const { model, images, rating, price, id } = data;
  const previewImageSrc =
    images && images.length > 0 ? images[0].url : '/avatar.svg';

  const brandName = data.brand[0].list.name
    ? data.brand[0].list.name
    : UNKNOWN_BRAND_NAME;

  const routeToDetailsHandler = () => {
    router.push(`/products/phones/details/${id}`);
  };

  return (
    <div
      className="p-5 w-full sm:max-w-xs box-border text-sm border rounded-lg cursor-pointer hover:shadow-lg"
      onClick={routeToDetailsHandler}
    >
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
      <span className="p-2 w-full inline-flex justify-between items-center">
        <h3 className="font-bold text-base">Price: {price} &#36;</h3>
        <AddToCartButton />
      </span>
    </div>
  );
};

export default PhoneCard;
