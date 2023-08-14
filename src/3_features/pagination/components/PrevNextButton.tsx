import React, { FC } from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { TypeButtonPagination } from '../types/enums';
import usePaginationStore from '../state/statePagination';
import classNames from 'classnames';

interface PrevNextButtonProps {
  type: TypeButtonPagination;
  maxPage?: number;
}

const PrevNextButton: FC<PrevNextButtonProps> = ({ type, maxPage }) => {
  const { currentPage, increasePage, decreasePage } = usePaginationStore();

  const MIN_PAGE = 1;
  
  const isPrevButtonDisabled =
    type === TypeButtonPagination.PREV && currentPage === MIN_PAGE;

  const isNextButtonDisabled =
    type === TypeButtonPagination.NEXT && currentPage === maxPage;

  const increasePageHandler = () => {
    if (currentPage === maxPage) return;
    increasePage();
  };

  const decreasePageHandler = () => {
    if (currentPage === MIN_PAGE) return;
    decreasePage();
  };

  return (
    <li
      className={classNames(
        'w-8 h-8 box-border border bg-primary rounded inline-flex items-center justify-center cursor-pointer transform active:scale-90 transition',
        { 'opacity-50 active:scale-100': isPrevButtonDisabled },
        { 'opacity-50 active:scale-100': isNextButtonDisabled }
      )}
      onClick={
        type === TypeButtonPagination.PREV
          ? decreasePageHandler
          : increasePageHandler
      }
    >
      {type === TypeButtonPagination.PREV ? (
        <IoMdArrowRoundBack size={25} color="white" />
      ) : (
        <IoMdArrowRoundForward size={25} color="white" />
      )}
    </li>
  );
};

export default PrevNextButton;
