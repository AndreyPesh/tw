'use client';
import { PhoneData } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';

const PhonesPage = ({ data }: { data: PhoneData }) => {
  // console.log(data);

  return (
    <div>
      {/* {data.map((phone) => {
        return <h1 key={phone.id}>{phone.brand[0].list.name}</h1>;
      })} */}
    </div>
  );
};

export default PhonesPage;
