'use client';

import { FC, MouseEvent, useRef, useState } from 'react';
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
import ListPreviewImage from './UI/ListPreviewImage';
import useTouchSlideSwitcher from './hooks/useTouchSlideSwitcher';

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

    activateTransitionEffect();

    if (button.dataset.direction === SlideDirectionMove.PREV) {
      decreaseSlide();
    }
    if (button.dataset.direction === SlideDirectionMove.NEXT) {
      increaseSlide();
    }
  };

  const activateTransitionEffect = () => {
    if (
      (numberSlide === numberLastSlideNotConsideringClone &&
        !isTransitionAvailable) ||
      (numberSlide === NUMBER_FIRST_SLIDE && !isTransitionAvailable)
    ) {
      setIsTransitionAvailable(() => true);
    }
  };

  const deactivateTransitionEffect = () => {
    if (numberSlide === NUMBER_FIRST_CLONE_SLIDE) {
      setIsTransitionAvailable(() => false);
      setNumberSlide(numberLastSlideNotConsideringClone);
    }
    if (numberSlide === numberLastSlide) {
      setIsTransitionAvailable(() => false);
      setNumberSlide(NUMBER_FIRST_SLIDE);
    }
  };

  const onTransitionSlideHandler = () => {
    deactivateTransitionEffect();
  };

  const refSlider = useRef<HTMLDivElement>(null);
  const { swipeStart, swipeAction, swipeEnd } = useTouchSlideSwitcher({
    refSlider,
    increaseSlide,
    decreaseSlide,
    activateTransitionEffect,
  });

  return (
    <div className="relative overflow-hidden select-none">
      <div
        ref={refSlider}
        className={classNames('flex w-full', {
          'transition-all': isTransitionAvailable,
        })}
        style={{
          transform: `translateX(${STEP_TRANSLATE_SLIDE * numberSlide}%)`,
        }}
        onTransitionEnd={onTransitionSlideHandler}
        onTouchStart={swipeStart}
        onTouchMove={swipeAction}
        onTouchEnd={swipeEnd}
      >
        {listImageUrlWithCloneFirstAndLastItem.map((url, index) => (
          <Slide key={url + index} urlImage={url} />
        ))}
      </div>
      <SlideManagement onMoveSlideHandler={onMoveSlide} />
      <ListPreviewImage
        activateTransitionEffect={activateTransitionEffect}
        listUrlImage={listUrlImage}
        activeSlide={numberSlide}
        setNumberSlide={setNumberSlide}
      />
    </div>
  );
};

export default Carousel;
