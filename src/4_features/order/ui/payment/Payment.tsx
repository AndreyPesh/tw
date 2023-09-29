import Card from './card/Card';
import useOrderStore from '../../state/state';
import Button from '@/src/6_shared/buttons/Button';
import { EnumTypeButton } from '@/src/6_shared/buttons/types/enums';
import usePayOrder from './hook/usePayOrder';
import { validateCardData } from './utils/validateCardData';
import useCardStore from './card/state/state';
import { useState } from 'react';
import useOrderModalStore from '../../state/modal/state';

interface PaymentProps {
  backButtonHandler: () => void;
}

const Payment = ({ backButtonHandler }: PaymentProps) => {
  const [isCardDataIncorrect, setIsCardDataIncorrect] = useState(false);
  const { price, quantity, resetOrder } = useOrderStore();
  const { numberCard, expiry, cvv } = useCardStore();
  const { createOrderFetch, isLoading } = usePayOrder();
  const { closeModal } = useOrderModalStore();

  const onPayHandler = async () => {
    const isCardDataValid = validateCardData({ numberCard, expiry, cvv });

    try {
      if (!isCardDataValid) {
        setIsCardDataIncorrect(true);
        return;
      }
      setIsCardDataIncorrect(false);
      const { isOrderApplied } = await createOrderFetch({ price, quantity });
      if (isOrderApplied) {
        resetOrder();
        closeModal();
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <div className="w-full">
      <h2 className="py-4 w-full text-center font-bold">Payment</h2>
      <Card />
      <div>
        <h2 className="py-4 font-bold">Total: {price * quantity} &#36;</h2>
      </div>
      {isCardDataIncorrect && (
        <div className="p-2 mb-2 bg-red bg-opacity-30 border-2 border-red rounded">
          <p className="text-center text-red">
            Card data is incorrect! Enter correct data! *
          </p>
        </div>
      )}
      <div className="flex justify-between">
        <Button
          variant={EnumTypeButton.DANGER}
          handler={() => backButtonHandler()}
        >
          Back
        </Button>
        <Button
          variant={EnumTypeButton.WARNING}
          handler={onPayHandler}
          isLoading={isLoading}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Payment;
