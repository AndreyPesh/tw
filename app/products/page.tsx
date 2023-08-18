import { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
  title: 'Products',
  description: 'Products page',
};

const ProductPage = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="container"></div>
      </Suspense>
    </>
  );
};

export default ProductPage;
