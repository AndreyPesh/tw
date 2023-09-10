import { FC } from 'react';
import Image from 'next/image';
import { ItemProductInCartData } from '@/src/5_shared/api/helpers/db/cart/CartDb';
import AddToCartButton from './AddToCartButton';
import { useRouter } from 'next/navigation';
import { EnumLinkPage } from '@/src/5_shared/types/enum';

interface CartItemProps {
  cartItemData: ItemProductInCartData;
}

const CartItem: FC<CartItemProps> = ({ cartItemData }) => {
  const router = useRouter();
  const { phone, quantity } = cartItemData;

  const imageSrc = phone.images[0].url;
  const brand = cartItemData.phone.brand[0].list.name;

  const routeToDetailsHandler = () => {
    router.push(`${EnumLinkPage.DETAILS}${phone.id}`);
  };

  return (
    <div
      onClick={routeToDetailsHandler}
      className="my-2 p-4 inline-flex items-center justify-between border rounded-lg cursor-pointer hover:shadow-lg select-none"
    >
      <div className="inline-flex items-center">
        <Image width={50} height={50} alt="image" src={imageSrc} />
        <h2>
          <b>{brand}</b> {phone.model}
        </h2>
      </div>
      <div className="inline-flex items-center">
        <h2>Quantity: {quantity}</h2>
        <AddToCartButton idProduct={cartItemData.phoneId} />
      </div>
    </div>
  );
};

export default CartItem;
