import { Suspense } from 'react';
import PhoneCard from '@/src/4_entities/phones/card/phone/PhoneCard';
import {
  fetchListPhoneWithFilter,
  fetchPhonePage,
} from '@/src/5_shared/utils/server/fetching/phone/data';
import Empty from '../Empty';
import { FilterPhoneQueryParams } from '@/src/3_features/phones/filter/types/interfaces';

const PhonesPage = async ({
  page,
  isFilterApplied,
  search,
}: {
  page: number;
  isFilterApplied?: boolean;
  search: FilterPhoneQueryParams;
}) => {
  let listPhones;
  if (isFilterApplied) {
    listPhones = await fetchListPhoneWithFilter(search);
  } else {
    listPhones = await fetchPhonePage(page);
  }

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
