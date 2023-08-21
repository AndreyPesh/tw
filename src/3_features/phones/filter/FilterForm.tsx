'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import InputRange, { DEFAULT_RATING_FILTER_VALUE } from './fields/InputRange';
import SelectBrand from './fields/SelectBrand';
import InputPrice from './fields/InputPrice';
import InputSortPrice from './fields/InputSortPrice';
import { FilterFormState } from './types/interfaces';
import { createFilterQueryParamsFromFormData } from './helpers/createFilterUrlFromFormData';

const FilterForm = () => {
  const router = useRouter();
  const { register, watch, resetField, reset, handleSubmit } =
    useForm<FilterFormState>({
      defaultValues: {
        brand_id: '',
        price_min: null,
        price_max: null,
        rating: DEFAULT_RATING_FILTER_VALUE,
        price_sort: null,
      },
    });
  const onSubmitFilter = handleSubmit((data) => {

    const url = createFilterQueryParamsFromFormData(data);
    console.log(url);

    router.push(url);

  });

  const onResetHandler = () => {
    reset();
  };

  return (
    <div className="w-1/3">
      <h3>Filter form</h3>
      <form onSubmit={onSubmitFilter}>
        <SelectBrand register={register('brand_id')} />
        <InputPrice
          register_min={register('price_min')}
          register_max={register('price_max')}
        />
        <InputRange register={register('rating')} watch={watch('rating')} />
        <InputSortPrice
          register={register('price_sort')}
          resetSorting={() => resetField('price_sort')}
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
