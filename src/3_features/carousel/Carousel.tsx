'use client';

import { FC, MouseEvent, TouchEvent, useRef, useState } from 'react';
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
import { conversionScreenWidthToPercent } from './helpers/conversionScreenWidthToPecent';
import { getCurrentTranslateValue } from './helpers/getCurrentTranslateValue';

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

  // ---------------------------------------------------------------------
  const refSlider = useRef<HTMLDivElement>(null);
  // const onTouchMoveSlide = (event: TouchEvent<HTMLDivElement>) => {
  //   // console.log(event.touches[0].clientX);
  // };

  let posInit = 0;
  let posX1 = 0;
  let posX2 = 0;

  const swipeStart = (event: TouchEvent<HTMLDivElement>) => {
    activateTransitionEffect()
    const currentPositionX = conversionScreenWidthToPercent(
      event.touches[0].clientX
    );

    posInit = currentPositionX;
    posX1 = currentPositionX;

    // refSlider.current && refSlider.current.style.setProperty('transform', '');
    // console.log(refSlider.current && refSlider.current.style);
  };

  const swipeAction = (event: TouchEvent<HTMLDivElement>) => {
    const currentPositionX = conversionScreenWidthToPercent(
      event.touches[0].clientX
    );

    posX2 = posX1 - currentPositionX;
    posX1 = currentPositionX;

    const currentTranslateValue = getCurrentTranslateValue(refSlider);
    console.log('value translate', currentTranslateValue);
    

    refSlider.current &&
      refSlider.current.style.setProperty(
        'transform',
        `translateX(${currentTranslateValue - posX2}%)`
      );
  };

  const swipeEnd = () => {
    if (posInit <= posX1) {
      decreaseSlide();
    } else if (posInit >= posX1) {
      increaseSlide();
    }
  };

  // --------------------------------------------------------------------------

  return (
    <div className="relative overflow-hidden select-none border-4">
      <h1>Current transition: {numberSlide}</h1>
      <h1>Current translate: {STEP_TRANSLATE_SLIDE * numberSlide}</h1>
      <div
        ref={refSlider}
        className={classNames('flex w-full', {
          'transition-all': isTransitionAvailable,
        })}
        style={{
          transform: `translateX(${STEP_TRANSLATE_SLIDE * numberSlide}%)`,
        }}
        onTransitionEnd={onTransitionSlideHandler}
        //
        onTouchStart={swipeStart}
        onTouchMove={swipeAction}
        onTouchEnd={swipeEnd}
        //
      >
        {listImageUrlWithCloneFirstAndLastItem.map((url, index) => (
          <Slide key={url + index} urlImage={url} />
        ))}
      </div>
      <SlideManagement onMoveSlideHandler={onMoveSlide} />
      <ListPreviewImage
        listUrlImage={listUrlImage}
        activeSlide={numberSlide}
        setNumberSlide={setNumberSlide}
      />
    </div>
  );
};

export default Carousel;
