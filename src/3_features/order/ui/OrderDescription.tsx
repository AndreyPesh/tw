import { useEffect, useState } from 'react';
import Image from 'next/image';
import useOrderStore from '../state/state';
import Counter from '../../counter/Counter';
import AddressDelivery from '../../userData/address/AddressDelivery';

const OrderDescription = () => {
  const { name, price, quantity, imageUrl } = useOrderStore();
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  if (!name) {
    return <h2>Product is not selected</h2>;
  }

  return (
    <div className="select-none">
      <h2 className="font-bold text-center">Order product</h2>
      <div className="inline-flex items-center">
        <Image width={50} height={50} src={imageUrl} alt={name} />
        <p>{name}</p>
      </div>
      <div className="flex items-center justify-between">
        <p>
          <b>Quantity:</b> {count}{' '}
        </p>
        <Counter count={count} setCount={setCount} minValue={1} />
      </div>
      <p>
        <b>Price:</b> {price} &#36;
      </p>
      <p>
        <b>Total:</b> {price * count} &#36;
      </p>
      <div className="max-w-[100%]">
        <AddressDelivery />
      </div>
    </div>
  );
};

export default OrderDescription;
