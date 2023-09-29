import { CardDataForm } from '../card/state/state';

const regexNumberCard = new RegExp('^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$');
const regexExpiryCard = new RegExp('^[1-9]{2} / [2-9]{2}$');
const regexCvvCard = new RegExp('^[0-9]{3}$');

export const validateCardData = ({ numberCard, expiry, cvv }: CardDataForm) => {
  const isNumberValid = regexNumberCard.test(numberCard);
  const isExpiryValid = regexExpiryCard.test(expiry);
  const isCvvValid = regexCvvCard.test(cvv);
  return isNumberValid && isExpiryValid && isCvvValid;
};
