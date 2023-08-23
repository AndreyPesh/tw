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
import StateIconFilter from './StateIconFilter';

const FilterForm = () => {
  const { applyPhoneFilter, resetPhoneFilter } = usePhoneFilterState();
  const router = useRouter();

  const {
    register,
    setValue,
    getValues,
    watch,
    resetField,
    reset,
    handleSubmit,
  } = useForm<FilterPhoneQueryParams>({
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
    <div className="p-3 w-1/3">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">Filters</h3>
        <StateIconFilter getValues={getValues} />
      </div>
      <form onSubmit={onSubmitFilter} className="py-3">
        <SelectBrand register={register('brand_id')} setValue={setValue} />
        <InputPrice
          register_min={register('price_min')}
          register_max={register('price_max')}
          setValue={setValue}
        />
        <InputRange
          register={register('rating')}
          watch={watch('rating')}
          setValue={setValue}
        />
        <InputSortPrice
          register={register('price_sort')}
          resetSorting={() => resetField('price_sort')}
          setValue={setValue}
        />
        <div className="p-4 flex justify-around">
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
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
