import { Suspense } from 'react';
import Loading from './loading';

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
