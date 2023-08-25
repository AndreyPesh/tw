import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { TypeButtonPagination } from '../types/enums';
import usePaginationStore from '../state/statePagination';
import { MIN_PAGE } from '../types/constants';

interface PrevNextButtonProps {
  type: TypeButtonPagination;
  linkPage: string;
  maxPage?: number;
  filterOptions?: {
    isFilterApplied: boolean;
    queryParamsFilter: string;
  };
}

const PrevNextButton: FC<PrevNextButtonProps> = ({
  type,
  maxPage,
  linkPage,
  filterOptions,
}) => {
  const router = useRouter();
  const { currentPage, increasePage, decreasePage } = usePaginationStore();

  const isPrevButtonDisabled =
    type === TypeButtonPagination.PREV && currentPage === MIN_PAGE;

  const isNextButtonDisabled =
    type === TypeButtonPagination.NEXT && currentPage === maxPage;

  const increasePageHandler = () => {
    if (currentPage === maxPage) return;
    let currentLinkPage = `${linkPage}/${currentPage + 1}`;
    if (filterOptions?.isFilterApplied) {
      currentLinkPage += filterOptions.queryParamsFilter;
    }
    router.push(`${currentLinkPage}`);
    increasePage();
  };

  const decreasePageHandler = () => {
    if (currentPage === MIN_PAGE) return;
    let currentLinkPage = `${linkPage}/${currentPage - 1}`;
    if (filterOptions?.isFilterApplied) {
      currentLinkPage += filterOptions.queryParamsFilter;
    }
    router.push(`${currentLinkPage}`);
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
