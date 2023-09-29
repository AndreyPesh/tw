import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FC, useState } from 'react';
import AddToCartButton from './AddToCartButton';
import Counter from '../counter/Counter';
import { ItemProductInCartData } from '@/src/6_shared/api/helpers/db/cart/CartDb';
import OrderButton from '@/src/6_shared/UI/buttons/OrderButton';
import { EnumLinkPage } from '@/src/6_shared/constants/main_navigation/enums';

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
      className="my-2 p-4 flex flex-col md:flex-row items-center justify-between bg-slate-100 border rounded-lg hover:shadow-lg select-none"
      data-route_details
    >
      <div
        onClick={routeToDetailsHandler}
        className="flex items-center cursor-pointer"
      >
        <Image width={50} height={50} alt="image" src={imageSrc} />
        <h2 className="hover:underline">
          <b>{brand}</b> {phone.model}
        </h2>
      </div>
      <div className="max-w-[600px] flex flex-col gap-2 md:flex-row  flex-wrap items-center justify-around">
        <h2 className="font-bold">Price: {phone.price} &#36;</h2>
        <Counter count={quantity} setCount={setQuantity} minValue={1} />
        <OrderButton productData={phone} quantity={quantity} />
        <AddToCartButton idProduct={cartItemData.phoneId} />
      </div>
    </div>
  );
};

export default CartItem;
