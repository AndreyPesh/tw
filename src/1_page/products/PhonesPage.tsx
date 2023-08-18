import { Suspense } from 'react';
import PhoneCard from '@/src/4_entities/phones/card/phone/PhoneCard';
import { fetchPhonePage } from '@/src/5_shared/utils/server/fetching/phone/data';
import Empty from '../Empty';

const PhonesPage = async ({ page }: { page: number }) => {
  const listPhones = await fetchPhonePage(page);

  return (
    <Suspense fallback={<h1>Loading phone</h1>}>
      <div className="py-5 w-full flex flex-wrap justify-center gap-5">
        {listPhones && listPhones.data && listPhones.data.length > 0 ? (
          listPhones.data.map((phone) => (
            <PhoneCard key={phone.id} data={phone} />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </Suspense>
  );
};

export default PhonesPage;
