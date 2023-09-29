import { useState, TouchEvent, RefObject } from 'react';
import { conversionScreenWidthToPercent } from '../helpers/conversionScreenWidthToPercent';
import { getCurrentTranslateValue } from '../helpers/getCurrentTranslateValue';
import {
  CENTER_OF_SCREEN,
  SENSITIVITY_FACTOR,
  SENSITIVITY_THRESHOLD,
} from '../types/constants';

interface UseToucheSliderProps {
  refSlider: RefObject<HTMLDivElement>;
  increaseSlide: () => void;
  decreaseSlide: () => void;
  activateTransitionEffect: () => void;
}

const useTouchSlideSwitcher = ({
  refSlider,
  increaseSlide,
  decreaseSlide,
  activateTransitionEffect,
}: UseToucheSliderProps) => {
  let lastPositionCursor = 0;
  let differenceLastCurrentCursor = 0;

  const [positionInit, setPosition] = useState(0);

  const swipeStart = (event: TouchEvent<HTMLDivElement>) => {
    activateTransitionEffect();
    const currentPositionX = conversionScreenWidthToPercent(
      event.touches[0].clientX
    );

    setPosition(currentPositionX);
    lastPositionCursor = currentPositionX;
  };

  const swipeAction = (event: TouchEvent<HTMLDivElement>) => {
    const currentPositionX = conversionScreenWidthToPercent(
      event.touches[0].clientX
    );

    differenceLastCurrentCursor = lastPositionCursor - currentPositionX;
    lastPositionCursor = currentPositionX;

    if (differenceLastCurrentCursor < SENSITIVITY_THRESHOLD) return;

    const currentTranslateValue = getCurrentTranslateValue(refSlider);

    refSlider.current &&
      refSlider.current.style.setProperty(
        'transform',
        `translateX(${
          currentTranslateValue -
          differenceLastCurrentCursor -
          SENSITIVITY_FACTOR
        }%)`
      );
  };

  const swipeEnd = () => {
    if (positionInit === lastPositionCursor || lastPositionCursor === 0) {
      if (positionInit > CENTER_OF_SCREEN) {
        increaseSlide();
      } else {
        decreaseSlide();
      }
      return;
    }

    if (positionInit <= lastPositionCursor) {
      decreaseSlide();
    } else if (positionInit >= lastPositionCursor) {
      increaseSlide();
    }
  };
  return { swipeStart, swipeAction, swipeEnd };
};

export default useTouchSlideSwitcher;
