import { Suspense } from 'react';
import PhonesPage from '@/src/1_page/products/PhonesPage';
import Pagination from '@/src/3_features/pagination/Pagination';
import {
  fetchCountListPhone,
  fetchListPhoneWithFilter,
} from '@/src/5_shared/utils/server/fetching/phone/data';
import { EnumLinkPage } from '@/src/5_shared/types/enum';
import PhoneCardPreload from '@/src/4_entities/phones/card/phone/PhoneCardPreload';
import { FilterPhoneQueryParams } from '@/src/3_features/phones/filter/types/interfaces';
import { isFilterApplied } from '@/src/5_shared/utils/server/fetching/phone/helpers/filterPhone';

const PhonePage = async ({
  params,
  searchParams,
}: {
  params: { number: string };
  searchParams: FilterPhoneQueryParams;
}) => {
  const PER_PAGE = 4;
  const page = params.number;
  let countListPhone: number | null;

  const isFilterPhoneApplied = isFilterApplied(searchParams);

  if (isFilterPhoneApplied) {
    const response = await fetchListPhoneWithFilter(Number(page), searchParams);
    countListPhone = response?.data.count ?? null;
  } else {
    countListPhone = await fetchCountListPhone();
  }

  return (
    <div className="w-2/3">
      <Suspense fallback={<PhoneCardPreload perPage={PER_PAGE} />}>
        <PhonesPage
          page={Number(page)}
          isFilterApplied={isFilterPhoneApplied}
          search={searchParams}
        />
      </Suspense>

      <div className="p-5">
        {countListPhone && (
          <Pagination
            initPage={Number(page)}
            linkPage={EnumLinkPage.PHONE_PAGE}
            perPage={PER_PAGE}
            itemsCount={countListPhone}
          ></Pagination>
        )}
      </div>
    </div>
  );
};

export default PhonePage;
