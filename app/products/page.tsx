import { Suspense } from 'react';
import Loading from './loading';
import Empty from '@/src/1_page/Empty';
import PhonesPage from '@/src/1_page/products/PhonesPage';
import { getPhoneListData } from '@/src/5_shared/utils/server/fetching/phone/data';
import { FIRST_PAGE_NUMBER } from '@/src/5_shared/types/constant';

export const metadata = {
  title: 'Products',
  description: 'Products page',
};

const ProductPage = async () => {
  const responsePhoneData = await getPhoneListData(FIRST_PAGE_NUMBER);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="container">
          {responsePhoneData && responsePhoneData.data.length > 0 ? (
            <PhonesPage data={responsePhoneData.data} />
          ) : (
            <Empty />
          )}
        </div>
      </Suspense>
    </>
  );
};

export default ProductPage;
