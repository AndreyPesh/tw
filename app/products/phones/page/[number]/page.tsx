import { fetchPhonePage } from '@/src/5_shared/utils/server/fetching/phone/data';
import Empty from '@/src/1_page/Empty';
import PhonesPage from '@/src/1_page/products/PhonesPage';

const PhonePage = async ({ params }: { params: { number: string } }) => {
  const page = params.number;
  const listPhones = await fetchPhonePage(Number(page));
  return (
    <div className="container">
      {listPhones && listPhones.data.length > 0 ? (
        <PhonesPage data={listPhones.data} />
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default PhonePage;
