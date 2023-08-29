import { FC, MouseEvent } from 'react';
import { SlideDirectionMove } from '../types/enums';

interface SlideManagementProps {
  onMoveSlideHandler: (event: MouseEvent<HTMLSpanElement>) => void;
}

const SlideManagement: FC<SlideManagementProps> = ({ onMoveSlideHandler }) => {
  return (
    <>
      <span
        onClick={onMoveSlideHandler}
        data-direction={SlideDirectionMove.PREV}
        className="absolute left-2 top-[calc(50%-40px)] w-10 h-10 inline-flex bg-gray-800 rounded-full cursor-pointer active:scale-90 transition-all"
      ></span>
      <span
        onClick={onMoveSlideHandler}
        data-direction={SlideDirectionMove.NEXT}
        className="absolute right-2 top-[calc(50%-40px)] w-10 h-10 inline-flex bg-gray-800 rounded-full cursor-pointer active:scale-90 transition-all"
      ></span>
    </>
  );
};

export default SlideManagement;
