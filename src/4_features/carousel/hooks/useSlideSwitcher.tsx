import { useState } from 'react';
import {
  NUMBER_FIRST_CLONE_SLIDE,
  NUMBER_FIRST_SLIDE,
  SLIDE_CHANGE_STEP,
} from '../types/constants';

const useSlideSwitcher = ({ numberLastSlide }: { numberLastSlide: number }) => {
  const [numberSlide, setNumberSlide] = useState<number>(NUMBER_FIRST_SLIDE);

  const increaseSlide = () => {
    if (numberSlide >= numberLastSlide) {
      return;
    }
    setNumberSlide(
      (currentNumberSlide) => currentNumberSlide + SLIDE_CHANGE_STEP
    );
  };

  const decreaseSlide = () => {
    if (numberSlide <= NUMBER_FIRST_CLONE_SLIDE) {
      return;
    }
    setNumberSlide(
      (currentNumberSlide) => currentNumberSlide - SLIDE_CHANGE_STEP
    );
  };

  return { numberSlide, setNumberSlide, increaseSlide, decreaseSlide };
};

export default useSlideSwitcher;
