import { FC } from 'react';
import usePaginationStore from '../state/statePagination';
import classNames from 'classnames';
import { MAX_ITEMS_BUTTON } from '../types/constants';

const ItemButton: FC<{ pageNumber: number }> = ({ pageNumber }) => {
  const { currentPage, setCurrentPage } = usePaginationStore();

  if (10 <= MAX_ITEMS_BUTTON) {
    return (
      <li
        className={classNames(
          'mx-1 w-8 h-8 inline-flex justify-center items-center text-sm border box-border rounded cursor-pointer transform active:scale-90 transition select-none',
          { 'bg-primary text-white': pageNumber === currentPage }
        )}
        onClick={() => setCurrentPage(pageNumber)}
      >
        {pageNumber}
      </li>
    );
  }
  return (
    <>
      <li
        className={classNames(
          'mx-1 w-8 h-8 inline-flex justify-center items-center text-sm border box-border rounded cursor-pointer transform active:scale-90 transition select-none',
          { 'bg-primary text-white': pageNumber === currentPage },
          { hidden: pageNumber < currentPage },
          { hidden: pageNumber > currentPage + 3}
        )}
        onClick={() => setCurrentPage(pageNumber)}
      >
        {pageNumber}
      </li>
    </>
  );
};

export default ItemButton;
