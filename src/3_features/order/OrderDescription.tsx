import useOrderStore from './state/state';

const OrderDescription = () => {
  const { name, price, total } = useOrderStore();

  return (
    <div>
      <h2>Order: {name}</h2>
      <h2>Price: {price}</h2>
      <h2>Total: {total}</h2>
    </div>
  );
};

export default OrderDescription;
