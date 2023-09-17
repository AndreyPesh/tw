import Card from './Card';
import useOrderStore from '../../state/state';

const Payment = () => {
  const { price, quantity } = useOrderStore();

  return (
    <div className="w-full">
      <h2 className="py-4 w-full text-center font-bold">Payment</h2>
      <Card />
      <div>
        <h2 className='py-4 font-bold'>Total: {price * quantity} &#36;</h2>
      </div>
    </div>
  );
};

export default Payment;
