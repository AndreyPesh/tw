'use client';

import Rating from '@/src/5_shared/UI/rating/Rating';
import { ChangeEvent, useState } from 'react';

const InputRange = () => {
  const [range, setRange] = useState(5);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setRange(() => Number(event.target.value));
  };

  return (
    <div>
      <Rating rating={range} />
      <input
        type="range"
        value={range}
        step={1}
        min={0}
        max={5}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default InputRange;
