import { ChangeEvent } from 'react';
import InputMask from 'react-input-mask';
import useCardStore, { CardDataForm } from './state/state';

const CardForm = () => {
  const { numberCard, expiry, cvv, addCardData } = useCardStore();

  const onChangeCardData = (event: ChangeEvent<HTMLInputElement>) => {
    const nameField = event.target.name as keyof CardDataForm;
    const value = event.target.value;
    addCardData({ [nameField]: value });
  };

  return (
    <form>
      <div className="pb-2 flex items-center justify-between">
        <InputMask
          name="numberCard"
          type="text"
          className="px-2 w-[220px] h-[30px] font-bold text-size-4 bg-transparent border-white rounded focus:border-white focus:ring-0"
          value={numberCard}
          onChange={onChangeCardData}
          mask={'9999-9999-9999-9999'}
          maskChar={'_'}
        />
        <span className="inline-block w-[32px] h-[30px] bg-wifi"></span>
      </div>
      <div className="max-w-[200px] flex justify-between">
        <div className="max-w-[63px] inline-flex ">
          <span className="mr-[5px] text-[6px] uppercase">Valid thru</span>
          <InputMask
            name="expiry"
            className="px-1 w-[65px] h-[23px] font-bold text-size-4 bg-transparent border border-white rounded focus:border-white focus:ring-0"
            type="text"
            value={expiry}
            onChange={onChangeCardData}
            mask={'99 / 99'}
            maskChar={'_'}
          />
        </div>
        <div>
          <span className="mr-[5px] uppercase">Cvv</span>
          <InputMask
            name="cvv"
            type="text"
            className="px-1 w-[45px] h-[23px] font-bold text-size-4 bg-transparent border border-white rounded focus:border-white focus:ring-0"
            value={cvv}
            onChange={onChangeCardData}
            mask={'999'}
            maskChar={'_'}
          />
        </div>
      </div>
    </form>
  );
};

export default CardForm;
