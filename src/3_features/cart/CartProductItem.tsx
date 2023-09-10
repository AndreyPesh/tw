import { FC, MouseEvent, useState } from 'react';
import Image from 'next/image';
import { ItemProductInCartData } from '@/src/5_shared/api/helpers/db/cart/CartDb';
import AddToCartButton from './AddToCartButton';
import { useRouter } from 'next/navigation';
import { EnumLinkPage } from '@/src/5_shared/types/enum';
import Counter from '../counter/Counter';
import BuyNowButton from '@/src/5_shared/UI/buttons/BuyNowButton';

interface CartItemProps {
  cartItemData: ItemProductInCartData;
}

const CartItem: FC<CartItemProps> = ({ cartItemData }) => {
  const { phone } = cartItemData;
  const [quantity, setQuantity] = useState(cartItemData.quantity);
  const router = useRouter();

  const imageSrc = phone.images[0].url;
  const brand = phone.brand[0].list.name;

  const routeToDetailsHandler = () => {
    router.push(`${EnumLinkPage.DETAILS}${phone.id}`);
  };

  return (
    <div
      className="my-2 p-4 flex flex-col md:flex-row items-center justify-between border rounded-lg hover:shadow-lg select-none"
      data-route_details
    >
      <div
        onClick={routeToDetailsHandler}
        className="inline-flex items-center cursor-pointer"
      >
        <Image width={50} height={50} alt="image" src={imageSrc} />
        <h2 className="hover:underline">
          <b>{brand}</b> {phone.model}
        </h2>
      </div>
      <div className="max-w-[500px] flex flex-col gap-2 md:flex-row md:flex-grow flex-wrap items-center justify-around">
        <Counter count={quantity} setCount={setQuantity} minValue={1} />
        <BuyNowButton />
        <AddToCartButton idProduct={cartItemData.phoneId} />
      </div>
    </div>
  );
};

export default CartItem;
