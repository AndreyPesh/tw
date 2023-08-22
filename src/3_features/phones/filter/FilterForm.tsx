'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import InputRange, { DEFAULT_RATING_FILTER_VALUE } from './fields/InputRange';
import SelectBrand from './fields/SelectBrand';
import InputPrice from './fields/InputPrice';
import InputSortPrice from './fields/InputSortPrice';
import { FilterPhoneQueryParams } from './types/interfaces';
import { createFilterQueryParamsFromFormData } from './helpers/createFilterUrlFromFormData';
import usePhoneFilterState from './stateFilter/state';
import { EnumLinkPage } from '@/src/5_shared/types/enum';
import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';

const FilterForm = () => {
  const { applyPhoneFilter, resetPhoneFilter } = usePhoneFilterState();
  const router = useRouter();

  const { register, watch, resetField, reset, handleSubmit } =
    useForm<FilterPhoneQueryParams>({
      defaultValues: {
        brand_id: '',
        price_min: null,
        price_max: null,
        rating: DEFAULT_RATING_FILTER_VALUE,
        price_sort: null,
      },
    });
  const onSubmitFilter = handleSubmit((data) => {
    const listQueryParams = createFilterQueryParamsFromFormData(data);
    applyPhoneFilter(listQueryParams);
    router.push(`${EnumLinkPage.PRODUCTS}${listQueryParams}`);
  });

  const onResetHandler = () => {
    resetPhoneFilter();
    reset();
    router.push(EnumLinkPage.PRODUCTS);
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
        <Button variant={EnumTypeButton.APPLY} type="submit">
          Apply filter
        </Button>
        <Button
          variant={EnumTypeButton.DANGER}
          type="button"
          handler={onResetHandler}
        >
          Reset filters
        </Button>
      </form>
    </div>
  );
};

export default FilterForm;
