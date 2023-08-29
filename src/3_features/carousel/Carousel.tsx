'use client';

import { FC, MouseEvent, useState } from 'react';
import Slide from './Slide';
import classNames from 'classnames';
import { STEP_TRANSLATE_SLIDE } from './types/constants';

const enum SlideDirectionMove {
  PREV = 'prev',
  NEXT = 'next',
}

interface CarouselProps {
  listUrlImage: Array<string>;
}

const Carousel: FC<CarouselProps> = ({ listUrlImage }) => {
  const [translationSlide, setTranslationSlide] = useState<number>(0);

  const onMoveSlide = (event: MouseEvent<HTMLSpanElement>) => {
    const button = event.target as HTMLElement;
    if (button.dataset.direction === SlideDirectionMove.PREV) {
      setTranslationSlide((prev) => prev - 1);
    }
    if (button.dataset.direction === SlideDirectionMove.NEXT) {
      setTranslationSlide((prev) => prev + 1);
    }
  };

  return (
    <div className="relative overflow-hidden select-none border-4">
      <h1>Current transition: {translationSlide}</h1>
      <div
        className={classNames('flex w-full transition-all')}
        style={{
          transform: `translateX(${STEP_TRANSLATE_SLIDE * translationSlide}%)`,
        }}
      >
        {listUrlImage.map((url, index) => (
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
