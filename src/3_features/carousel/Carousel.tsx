'use client';

import { FC, MouseEvent, useState } from 'react';
import Slide from './UI/Slide';
import classNames from 'classnames';
import SlideManagement from './UI/SlideManagement';
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
      <SlideManagement onMoveSlideHandler={onMoveSlide} />
    </div>
  );
};

export default Carousel;
