import Header from '@/src/2_widgets/header/Header';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
  title: 'Products',
  description: 'Products page',
};

const ProductPage = async () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <div className='container'>Products</div>
      </Suspense>
    </>
  );
};

export default ProductPage;
