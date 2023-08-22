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
    <div>
      <h3>Sorting</h3>
      <input
        type="radio"
        id="sortingPrice1"
        value={TypePriceSort.ascending}
        {...register}
      />
      <label htmlFor="sortingPrice1">Cheaper</label>

      <input
        type="radio"
        id="sortingPrice2"
        value={TypePriceSort.descending}
        {...register}
      />
      <label htmlFor="sortingPrice2">More expensive</label>
      <button type='button' onClick={resetSorting}>Reset sorting</button>
    </div>
  );
};

export default InputSortPrice;
