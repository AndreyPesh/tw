import useCardStore from '../card/state/state';
import { validateCardData } from '../utils/validateCardData';

const usePayOrder = () => {
  const { numberCard, expiry, cvv } = useCardStore();
  const isCardDataValid = validateCardData({ numberCard, expiry, cvv });

  return { isCardDataValid };
};

export default usePayOrder;
