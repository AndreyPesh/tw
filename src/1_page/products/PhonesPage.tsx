import { Suspense } from 'react';
import PhoneCard from '@/src/4_entities/phones/card/phone/PhoneCard';
import { fetchPhonePage } from '@/src/5_shared/utils/server/fetching/phone/data';
import Empty from '../Empty';
import { FilterPhoneQueryParams } from '@/src/3_features/phones/filter/types/interfaces';
import { ListPhoneData } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';

interface PhonesPageProps {
  page: number;
  searchParams: FilterPhoneQueryParams;
}

const PhonesPage = async ({ page, searchParams }: PhonesPageProps) => {
  let listPhone: ListPhoneData | null;
  const response = await fetchPhonePage(page, searchParams);
  listPhone = response?.data ?? null;

  return (
    <Suspense fallback={<h1>Loading phone</h1>}>
      <div className="py-5 w-full flex flex-wrap justify-center gap-5">
        {listPhone && listPhone.length > 0 ? (
          listPhone.map((phone) => <PhoneCard key={phone.id} data={phone} />)
        ) : (
          <Empty />
        )}
      </div>
    </Suspense>
  );
};

export default PhonesPage;
