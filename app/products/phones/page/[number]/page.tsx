import { Suspense } from 'react';
import PhonesPage from '@/src/1_page/products/PhonesPage';
import Pagination from '@/src/3_features/pagination/Pagination';
import { fetchCountListPhone } from '@/src/5_shared/utils/server/fetching/phone/data';
import { EnumLinkPage } from '@/src/5_shared/types/enum';
import PhoneCardPreload from '@/src/4_entities/phones/card/phone/PhoneCardPreload';
import FilterForm from '@/src/3_features/phones/filter/FilterForm';

const PhonePage = async ({ params }: { params: { number: string } }) => {
  const PER_PAGE = 4;
  const page = params.number;
  const countListPhone = await fetchCountListPhone();
  return (
    <div className="container flex">
      <FilterForm />
      <div className="w-2/3">
        <Suspense fallback={<PhoneCardPreload perPage={PER_PAGE} />}>
          <PhonesPage page={Number(page)} />
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
    </div>
  );
};

export default PhonePage;
