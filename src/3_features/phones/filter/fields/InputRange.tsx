'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Rating from '@/src/5_shared/UI/rating/Rating';
import classNames from 'classnames';

export const DEFAULT_RATING_FILTER_VALUE = 5;

const InputRange = ({
  register,
  watch,
}: {
  register: UseFormRegisterReturn<'rating'>;
  watch: number | null;
}) => {
  const [range, setRange] = useState(DEFAULT_RATING_FILTER_VALUE);
  const [isApply, setIsApply] = useState<boolean>(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setRange(() => Number(event.target.value));
    register.onChange(event);
  };

  const onSelectHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsApply((prev) => !prev);
  };

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
        <input
          type="checkbox"
          onChange={onSelectHandler}
          checked={isApply}
          className="w-5 h-5 focus:ring-0 focus:ring-offset-0 cursor-pointer z-20"
        />
        <div
          className={classNames(
            'absolute w-full h-full top-0 left-0 bg-slate-400 opacity-50 z-10',
            { hidden: isApply }
          )}
        ></div>
      </div>
    </div>
  );
};

export default InputRange;
