'use client';

import InputRange from './fields/InputRange';
import { useForm } from 'react-hook-form';
import SelectBrand from './fields/SelectBrand';
import InputPrice from './fields/InputPrice';

const enum TypePriceSort {
  descending = 'desc',
  ascending = 'asc',
}

export interface FilterFormState {
  brandId: string | null;
  price_min: number;
  price_max: number;
  rating: number;
  // priceSort: TypePriceSort | null;
}

const FilterForm = () => {
  const { register, handleSubmit } = useForm<FilterFormState>();
  const onSubmitFilter = handleSubmit((data) => console.log(data));

  return (
    <div className="w-1/3">
      <h3>Filter form</h3>
      <form onSubmit={onSubmitFilter}>
        <SelectBrand register={register('brandId')} />
        <InputPrice
          register_min={register('price_min')}
          register_max={register('price_max')}
        />
        <InputRange register={register('rating')} />
        <div>
          <h3>Sorting</h3>
          <input
            type="radio"
            id="sortingPrice1"
            name="sorting_price"
            value="cheaper"
          />
          <label htmlFor="sortingPrice1">Cheaper</label>

          <input
            type="radio"
            id="sortingPrice2"
            name="sorting_price"
            value="expensive"
          />
          <label htmlFor="sortingPrice2">More expensive</label>
        </div>
        <button type="submit">Apply filter</button>
      </form>
    </div>
  );
};

export default FilterForm;
