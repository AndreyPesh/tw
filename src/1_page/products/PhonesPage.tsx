import { Suspense } from 'react';
import PhoneCard from '@/src/4_entities/phones/card/phone/PhoneCard';
import {
  fetchListPhoneWithFilter,
  fetchPhonePage,
} from '@/src/5_shared/utils/server/fetching/phone/data';
import Empty from '../Empty';
import { FilterPhoneQueryParams } from '@/src/3_features/phones/filter/types/interfaces';
import { ListPhoneData } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';

const PhonesPage = async ({
  page,
  isFilterApplied,
  search,
}: {
  page: number;
  isFilterApplied?: boolean;
  search: FilterPhoneQueryParams;
}) => {
  let listPhone: ListPhoneData | null;
  if (isFilterApplied) {
    const response = await fetchListPhoneWithFilter(page, search);
    listPhone = response?.data.listPhone ?? null;
  } else {
    const response = await fetchPhonePage(page);
    listPhone = response?.data.listPhone ?? null;
  }

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
