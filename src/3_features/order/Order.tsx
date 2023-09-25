import { useState } from 'react';
import classNames from 'classnames';
import Button from '@/src/5_shared/buttons/Button';
import OrderDescription from './ui/OrderDescription';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import Payment from './ui/payment/Payment';

const Order = () => {
  const [isShowPayment, setIsShowPayment] = useState(false);
  return (
    <div className="w-full max-w-[300px] overflow-hidden">
      <div
        className={classNames('w-full flex  transition-all', {
          'translate-x-[-100%]': isShowPayment,
        })}
      >
        <div className={classNames('w-full min-w-[100%] overflow-hidden')}>
          <OrderDescription />
          <div className="pt-2">
            <Button
              type="button"
              variant={EnumTypeButton.APPLY}
              handler={() => setIsShowPayment(true)}
            >
              Pay
            </Button>
          </div>
        </div>
        <div className="w-full">
          <Payment backButtonHandler={() => setIsShowPayment(false)} />
        </div>
      </div>
    </div>
  );
};

export default Order;
