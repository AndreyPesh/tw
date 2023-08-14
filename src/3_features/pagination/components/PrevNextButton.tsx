import React, { FC } from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { TypeButtonPagination } from '../types/enums';

interface PrevNextButtonProps {
  type: TypeButtonPagination;
}

const PrevNextButton: FC<PrevNextButtonProps> = ({ type }) => {
  return (
    <li className="w-8 h-8 box-border border bg-primary rounded inline-flex items-center justify-center cursor-pointer transform active:scale-90 transition">
      {type === TypeButtonPagination.PREV ? (
        <IoMdArrowRoundBack size={25} color="white" />
      ) : (
        <IoMdArrowRoundForward size={25} color="white" />
      )}
    </li>
  );
};

export default PrevNextButton;
