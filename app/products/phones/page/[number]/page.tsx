import {
  fetchCountListPhone,
  fetchPhonePage,
} from '@/src/5_shared/utils/server/fetching/phone/data';
import Empty from '@/src/1_page/Empty';
import PhonesPage from '@/src/1_page/products/PhonesPage';
import Pagination from '@/src/3_features/pagination/Pagination';
import { EnumLinkPage } from '@/src/5_shared/types/enum';

const PhonePage = async ({ params }: { params: { number: string } }) => {
  const page = params.number;
  const countListPhone = await fetchCountListPhone();
  const listPhones = await fetchPhonePage(Number(page));

  return (
    <div className="container">
      {listPhones && listPhones.data && listPhones.data.length > 0 ? (
        <PhonesPage data={listPhones.data} />
      ) : (
        <Empty />
      )}
      <div className="p-5">
        {countListPhone && (
          <Pagination
            initPage={Number(page)}
            linkPage={EnumLinkPage.PHONE_PAGE}
            perPage={4}
            itemsCount={countListPhone}
          ></Pagination>
        )}
      </div>
    </div>
  );
};

export default PhonePage;
