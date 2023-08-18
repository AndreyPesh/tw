import PhoneCard from '@/src/4_entities/phones/card/PhoneCard';
import { ListPhoneData } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';

const PhonesPage = ({ data }: { data: ListPhoneData }) => {
  return (
    <div className="py-5 w-full flex flex-wrap justify-center gap-5">
      {data.map((phone) => (
        <PhoneCard key={phone.id} data={phone} />
      ))}
    </div>
  );
};

export default PhonesPage;
