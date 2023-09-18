import Card from './card/Card';
import useOrderStore from '../../state/state';
import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import usePayOrder from './hook/usePayOrder';

interface PaymentProps {
  backButtonHandler: () => void;
}

const Payment = ({ backButtonHandler }: PaymentProps) => {
  const { price, quantity } = useOrderStore();
  const { isCardDataValid } = usePayOrder();

  const onPayHandler = () => {
    console.log(`Card data is valid ${isCardDataValid}`);
  };

  return (
    <div className="w-full">
      <h2 className="py-4 w-full text-center font-bold">Payment</h2>
      <Card />
      <div>
        <h2 className="py-4 font-bold">Total: {price * quantity} &#36;</h2>
      </div>
      <div className="flex justify-between">
        <Button
          variant={EnumTypeButton.DANGER}
          handler={() => backButtonHandler()}
        >
          Back
        </Button>
        <Button variant={EnumTypeButton.WARNING} handler={onPayHandler}>
          Send order
        </Button>
      </div>
    </div>
  );
};

export default Payment;
