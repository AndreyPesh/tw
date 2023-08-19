'use client';

import { ChangeEvent, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Rating from '@/src/5_shared/UI/rating/Rating';

const InputRange = ({
  register,
}: {
  register: UseFormRegisterReturn<'rating'>;
}) => {
  const DEFAULT_RANGE_VALUE = 5;
  const [range, setRange] = useState(DEFAULT_RANGE_VALUE);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setRange(() => Number(event.target.value));
    register.onChange(event);
  };

  return (
    <div>
      <Rating rating={range} />
      <input
        type="range"
        defaultValue={DEFAULT_RANGE_VALUE}
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
