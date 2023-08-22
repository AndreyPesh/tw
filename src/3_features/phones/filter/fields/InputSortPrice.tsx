import SmallButton from '@/src/5_shared/UI/buttons/SmallButton';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export const enum TypePriceSort {
  descending = 'desc',
  ascending = 'asc',
}

const InputSortPrice = ({
  register,
  resetSorting,
}: {
  register: UseFormRegisterReturn<'price_sort'>;
  resetSorting: () => void;
}) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h3 className="font-bold">Sort by price</h3>
      <div className="w-full inline-flex items-center">
        <input
          type="radio"
          className='focus:ring-0 focus:ring-offset-0'
          id="sortingPrice1"
          value={TypePriceSort.ascending}
          {...register}
        />
        <label htmlFor="sortingPrice1" className="ml-3">
          Cheaper
        </label>
      </div>
      <div className="w-full inline-flex items-center">
        <input
          type="radio"
          className='focus:ring-0 focus:ring-offset-0'
          id="sortingPrice2"
          value={TypePriceSort.descending}
          {...register}
        />
        <label htmlFor="sortingPrice2" className="ml-3">
          More expensive
        </label>
      </div>
      <SmallButton variant={EnumTypeButton.DANGER} handler={resetSorting}>
        Reset sorting
      </SmallButton>
    </div>
  );
};

export default InputSortPrice;
