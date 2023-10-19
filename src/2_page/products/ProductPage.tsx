import ProductList from '@/src/3_widgets/productList/ProductList';
import { ProductPageProps } from '@/src/6_shared/utils/server/fetching/phone/types/interfaces';

const ProductPage = ({ page, searchParams }: ProductPageProps) => {
  return <ProductList page={page} searchParams={searchParams} />;
};

export default ProductPage;
