import { FC, MouseEvent } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
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
        className="absolute left-2 top-[calc(50%-40px)] w-10 h-10 inline-flex justify-center items-center bg-white  border-2 border-gray rounded-full cursor-pointer active:scale-90 transition-all hover:shadow-lg"
      >
        <AiOutlineArrowLeft
          size={20}
          color="#D5D5D5"
          className="pointer-events-none"
        />
      </span>
      <span
        onClick={onMoveSlideHandler}
        data-direction={SlideDirectionMove.NEXT}
        className="absolute right-2 top-[calc(50%-40px)] w-10 h-10 inline-flex justify-center items-center bg-white border-2 border-gray rounded-full cursor-pointer active:scale-90 transition-all"
      >
        <AiOutlineArrowRight
          size={20}
          color="#D5D5D5"
          className="pointer-events-none"
        />
      </span>
    </>
  );
};

export default SlideManagement;
