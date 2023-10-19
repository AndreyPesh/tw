import { Suspense } from 'react';
import { ProductListData } from '@/src/6_shared/api/helpers/db/phone/ProductDb';
import { fetchPhonePage } from '@/src/6_shared/utils/server/fetching/phone/data';
import Empty from '@/src/6_shared/UI/empty/Empty';
import ProductCard from '@/src/5_entities/product/ProductCard';
import { ProductPageProps } from '@/src/6_shared/utils/server/fetching/phone/types/interfaces';

const ProductList = async ({ page, searchParams }: ProductPageProps) => {
  let productList: ProductListData | null;
  const response = await fetchPhonePage({ page, searchParams });
  productList = response?.data ?? null;

  return (
    <Suspense fallback={<h1>Loading phone</h1>}>
      <div className="py-5 w-full flex flex-wrap justify-center gap-5">
        {productList && productList.length > 0 ? (
          productList.map((phone) => (
            <ProductCard key={phone.id} data={phone} />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </Suspense>
  );
};

export default ProductList;
