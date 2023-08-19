'use client';

import InputRange from './fields/InputRange';
import { useForm } from 'react-hook-form';
import SelectBrand from './fields/SelectBrand';
import InputPrice from './fields/InputPrice';
import InputSortPrice, { TypePriceSort } from './fields/InputSortPrice';

export interface FilterFormState {
  brandId: string;
  price_min: number;
  price_max: number;
  rating: number;
  priceSort: TypePriceSort | null;
}

const FilterForm = () => {
  const { register, resetField, handleSubmit } = useForm<FilterFormState>();
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
        <InputSortPrice
          register={register('priceSort')}
          resetSorting={() => resetField('priceSort')}
        />
        <button type="submit">Apply filter</button>
      </form>
    </div>
  );
};

export default FilterForm;
