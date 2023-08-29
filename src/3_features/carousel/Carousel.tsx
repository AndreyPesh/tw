'use client';

import { FC, MouseEvent, useState } from 'react';
import Slide from './Slide';
import classNames from 'classnames';
import {
  NUMBER_FIRST_CLONE_SLIDE,
  NUMBER_FIRST_SLIDE,
  STEP_TRANSLATE_SLIDE,
} from './types/constants';
import cloneFirstAndLastItemImageUrl from './helpers/cloneFirstAndLastItemImageUrl';
import { CarouselProps } from './types/interfaces';
import { SlideDirectionMove } from './types/enums';
import useSlideSwitcher from './hooks/useSlideSwitcher';

const Carousel: FC<CarouselProps> = ({ listUrlImage }) => {
  const [isTransitionAvailable, setIsTransitionAvailable] =
    useState<boolean>(true);

  const {
    listImageUrlWithCloneFirstAndLastItem,
    numberLastSlideNotConsideringClone,
    numberLastSlide,
  } = cloneFirstAndLastItemImageUrl(listUrlImage);

  const { numberSlide, setNumberSlide, increaseSlide, decreaseSlide } =
    useSlideSwitcher({ numberLastSlide });

  const onMoveSlide = (event: MouseEvent<HTMLSpanElement>) => {
    const button = event.target as HTMLElement;
    if (
      (numberSlide === numberLastSlideNotConsideringClone &&
        !isTransitionAvailable) ||
      (numberSlide === NUMBER_FIRST_SLIDE && !isTransitionAvailable)
    ) {
      setIsTransitionAvailable(() => true);
    }

    if (button.dataset.direction === SlideDirectionMove.PREV) {
      decreaseSlide();
    }
    if (button.dataset.direction === SlideDirectionMove.NEXT) {
      increaseSlide();
    }
  };

  const onTransitionSlideHandler = () => {
    if (numberSlide === NUMBER_FIRST_CLONE_SLIDE) {
      setIsTransitionAvailable(() => false);
      setNumberSlide(numberLastSlideNotConsideringClone);
    }
    if (numberSlide === numberLastSlide) {
      setIsTransitionAvailable(() => false);
      setNumberSlide(NUMBER_FIRST_SLIDE);
    }
  };

  return (
    <div className="relative overflow-hidden select-none border-4">
      <h1>Current transition: {numberSlide}</h1>
      <div
        className={classNames('flex w-full', {
          'transition-all': isTransitionAvailable,
        })}
        style={{
          transform: `translateX(${STEP_TRANSLATE_SLIDE * numberSlide}%)`,
        }}
        onTransitionEnd={onTransitionSlideHandler}
      >
        {listImageUrlWithCloneFirstAndLastItem.map((url, index) => (
          <Slide key={url + index} urlImage={url} />
        ))}
      </div>
      <span
        onClick={onMoveSlide}
        data-direction={SlideDirectionMove.PREV}
        className="absolute left-2 top-[calc(50%-40px)] w-10 h-10 inline-flex bg-gray-800 rounded-full cursor-pointer active:scale-90 transition-all"
      ></span>
      <span
        onClick={onMoveSlide}
        data-direction={SlideDirectionMove.NEXT}
        className="absolute right-2 top-[calc(50%-40px)] w-10 h-10 inline-flex bg-gray-800 rounded-full cursor-pointer active:scale-90 transition-all"
      ></span>
    </div>
  );
};

export default Carousel;
