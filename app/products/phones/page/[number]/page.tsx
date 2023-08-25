import { Suspense } from 'react';
import PhonesPage from '@/src/1_page/products/PhonesPage';
import Pagination from '@/src/3_features/pagination/Pagination';
import { fetchCountListPhone } from '@/src/5_shared/utils/server/fetching/phone/data';
import { EnumLinkPage } from '@/src/5_shared/types/enum';
import PhoneCardPreload from '@/src/4_entities/phones/card/phone/PhoneCardPreload';
import { FilterPhoneQueryParams } from '@/src/3_features/phones/filter/types/interfaces';
import { PER_PAGE } from '@/src/5_shared/types/constant';

const PhonePage = async ({
  params,
  searchParams,
}: {
  params: { number: string };
  searchParams: FilterPhoneQueryParams;
}) => {
  const page = params.number;

  const countListPhone = await fetchCountListPhone(searchParams);

  return (
    <div className="w-full">
      <Suspense fallback={<PhoneCardPreload perPage={PER_PAGE} />}>
        <PhonesPage page={Number(page)} searchParams={searchParams} />
      </Suspense>

      <div className="p-5">
        {countListPhone != 0 && countListPhone && (
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
