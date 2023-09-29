'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import InputRange, { DEFAULT_RATING_FILTER_VALUE } from './fields/InputRange';
import SelectBrand from './fields/SelectBrand';
import InputPrice from './fields/InputPrice';
import InputSortPrice from './fields/InputSortPrice';
import { FilterPhoneQueryParams } from './types/interfaces';
import { createFilterQueryParamsFromFormData } from './helpers/createFilterUrlFromFormData';
import StateIconFilter from './StateIconFilter';
import usePhoneFilterState from './stateFilter/state';
import Button from '@/src/6_shared/buttons/Button';
import { EnumTypeButton } from '@/src/6_shared/buttons/types/enums';
import { EnumLinkPage } from '@/src/6_shared/constants/main_navigation/enums';

const FilterForm = () => {
  const [isShow, setIsShow] = useState(false);
  const { applyPhoneFilter, resetPhoneFilter } = usePhoneFilterState();
  const router = useRouter();

  const { register, setValue, watch, resetField, reset, handleSubmit } =
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
    setIsShow(false);
  });

  const onResetHandler = () => {
    resetPhoneFilter();
    reset();
    router.push(EnumLinkPage.PRODUCTS);
    setIsShow(false);
  };

  const onShowHideHandler = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className="relative p-3 mt-3 w-full overflow-hidden border rounded shadow-lg">
      <div
        className="flex justify-between items-center"
        onClick={onShowHideHandler}
      >
        <h3 className="font-bold">Filters</h3>
        <StateIconFilter isShow={isShow} />
      </div>
      <div
        className={classNames(
          'grid overflow-hidden transition-all',
          { 'grid-rows-[0fr] pt-0': !isShow },
          { 'grid-rows-[1fr] pt-3': isShow }
        )}
      >
        <form onSubmit={onSubmitFilter} className="min-h-0 md:w-1/2">
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
          <div className="pt-2 flex justify-around">
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
    </div>
  );
};

export default FilterForm;
