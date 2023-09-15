import { OrderProductData } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import { OrderData } from '../state/types/interfaces';

export const createOrderDataFromProductData = (
  productData: OrderProductData,
  quantity: number
): OrderData => {
  const brand = productData.brand[0].list.name;
  const { id, model, images, price } = productData;

  return {
    productId: id,
    name: `${brand} ${model}`,
    imageUrl: images[0].url,
    price,
    quantity,
    total: quantity * price,
  };
};
