import Header from '@/src/2_widgets/header/Header';
import { Suspense } from 'react';
import Loading from './loading';
import { getUserData } from '@/src/5_shared/utils/server/fetching/user/data';

export const metadata = {
  title: 'Products',
  description: 'Products page',
};

const ProductPage = async () => {
  const userData = await getUserData();
  return (
    <>
      <Header user={userData} />
      <Suspense fallback={<Loading />}>
        <div className="container">Products</div>
      </Suspense>
    </>
  );
};

export default ProductPage;
