import { Suspense } from 'react';
import Loading from './loading';
import Empty from '@/src/1_page/Empty';
import PhonesPage from '@/src/1_page/products/PhonesPage';
import { getPhoneData } from '@/src/5_shared/utils/server/fetching/phone/data';

export const metadata = {
  title: 'Products',
  description: 'Products page',
};

const ProductPage = async () => {
  const responsePhoneData = await getPhoneData();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="container">Products</div>
        {responsePhoneData ? (
          <PhonesPage data={responsePhoneData.data} />
        ) : (
          <Empty />
        )}
      </Suspense>
    </>
  );
};

export default ProductPage;
