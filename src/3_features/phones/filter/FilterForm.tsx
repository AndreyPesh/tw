'use client';

import { useForm } from 'react-hook-form';
import InputRange, { DEFAULT_RATING_FILTER_VALUE } from './fields/InputRange';
import SelectBrand from './fields/SelectBrand';
import InputPrice from './fields/InputPrice';
import InputSortPrice, { TypePriceSort } from './fields/InputSortPrice';

export interface FilterFormState {
  brandId: string;
  price_min: number | null;
  price_max: number | null;
  rating: number;
  priceSort: TypePriceSort | null;
}

const FilterForm = () => {
  const { register, watch, resetField, reset, handleSubmit } =
    useForm<FilterFormState>({
      defaultValues: {
        brandId: '',
        price_min: null,
        price_max: null,
        rating: DEFAULT_RATING_FILTER_VALUE,
        priceSort: null,
      },
    });
  const onSubmitFilter = handleSubmit((data) => console.log(data));

  const onResetHandler = () => {
    reset();
  };

  return (
    <div className="w-1/3">
      <h3>Filter form</h3>
      <form onSubmit={onSubmitFilter}>
        <SelectBrand register={register('brandId')} />
        <InputPrice
          register_min={register('price_min')}
          register_max={register('price_max')}
        />
        <InputRange register={register('rating')} watch={watch('rating')} />
        <InputSortPrice
          register={register('priceSort')}
          resetSorting={() => resetField('priceSort')}
        />
        <button type="submit">Apply filter</button>
        <button type="button" onClick={onResetHandler}>
          Reset all filters
        </button>
      </form>
    </div>
  );
};

export default FilterForm;
