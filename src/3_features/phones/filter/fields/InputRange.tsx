'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form';
import Rating from '@/src/5_shared/UI/rating/Rating';
import { FilterPhoneQueryParams } from '../types/interfaces';

export const DEFAULT_RATING_FILTER_VALUE = 5;

const InputRange = ({
  register,
  setValue,
  watch,
}: {
  register: UseFormRegisterReturn<'rating'>;
  setValue: UseFormSetValue<FilterPhoneQueryParams>;
  watch: number | null;
}) => {
  const searchParams = useSearchParams();
  const [range, setRange] = useState(DEFAULT_RATING_FILTER_VALUE);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setRange(() => Number(event.target.value));
    register.onChange(event);
  };

  useEffect(() => {
    const ratingQueryParam = searchParams.get('rating');
    ratingQueryParam && setValue('rating', Number(ratingQueryParam));
  }, []);

  useEffect(() => {
    if (watch !== range && watch) {
      setRange(watch);
    }
  }, [watch]);

  return (
    <div className="relative overflow-hidden p-4 mb-2 border rounded shadow-md">
      <h3 className="font-bold">Select popular</h3>
      <Rating rating={range} />
      <div className="flex justify-between">
        <input
          type="range"
          className="accent-primary cursor-pointer"
          defaultValue={DEFAULT_RATING_FILTER_VALUE}
          step={1}
          min={0}
          max={5}
          onChange={onChangeHandler}
          name={register.name}
          ref={register.ref}
        />
      </div>
    </div>
  );
};

export default InputRange;
