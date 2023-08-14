import { PhoneData } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import { FC } from 'react';
import { UNKNOWN_BRAND_NAME } from '../constants';

const PhoneCard: FC<{ data: PhoneData }> = ({ data }) => {
  const brandName = data.brand[0].list.name
    ? data.brand[0].list.name
    : UNKNOWN_BRAND_NAME;

  return (
    <div>
      <h1>{brandName}</h1>
    </div>
  );
};

export default PhoneCard;
