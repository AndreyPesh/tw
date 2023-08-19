'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Rating from '@/src/5_shared/UI/rating/Rating';

export const DEFAULT_RATING_FILTER_VALUE = 5;

const InputRange = ({
  register,
  watch,
}: {
  register: UseFormRegisterReturn<'rating'>;
  watch: number;
}) => {
  const [range, setRange] = useState(DEFAULT_RATING_FILTER_VALUE);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setRange(() => Number(event.target.value));
    register.onChange(event);
  };

  useEffect(() => {
    if (watch !== range) {
      setRange(watch);
    }
  }, [watch]);

  return (
    <div>
      <Rating rating={range} />
      <input
        type="range"
        defaultValue={DEFAULT_RATING_FILTER_VALUE}
        step={1}
        min={0}
        max={5}
        onChange={onChangeHandler}
        name={register.name}
        ref={register.ref}
      />
    </div>
  );
};

export default InputRange;
