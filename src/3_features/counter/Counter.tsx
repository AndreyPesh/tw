import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  MouseEvent,
} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface CounterProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  minValue: number;
}

const Counter: FC<CounterProps> = ({ count, setCount, minValue }) => {
  const countHandler = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    const typeButton = event.target as HTMLInputElement;
    if (typeButton.dataset.increase) {
      setCount(count + 1);
    }
    if (typeButton.dataset.decrease) {
      if (count <= minValue) {
        setCount(minValue);
        return;
      }
      setCount(count - 1);
    }
  };
  const changeCountHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const value = Number(event.target.value);
    if (value < minValue) {
      setCount(minValue);
      return;
    }
    setCount(value);
  };

  return (
    <div className="mx-2 inline-flex h-10">
      <span
        onClick={countHandler}
        data-decrease
        className="inline-flex items-center justify-center w-10 h-10 bg-red border rounded-lg cursor-pointer active:scale-95"
      >
        <AiOutlineMinus
          size={25}
          color="#ffffff"
          className="pointer-events-none"
        />
      </span>
      <input
        className="mx-1 w-20 text-center rounded-lg"
        type="number"
        value={count}
        onChange={changeCountHandler}
        min={minValue}
      />
      <span
        onClick={countHandler}
        data-increase
        className="inline-flex items-center justify-center w-10 h-10 bg-red border rounded-lg cursor-pointer active:scale-95"
      >
        <AiOutlinePlus
          size={25}
          color="#ffffff"
          className="pointer-events-none"
        />
      </span>
    </div>
  );
};

export default Counter;
