import { FC } from 'react';
import usePaginationStore from '../state/statePagination';
import classNames from 'classnames';

const ItemButton: FC<{ pageNumber: number }> = ({ pageNumber }) => {
  const { currentPage, setCurrentPage } = usePaginationStore();

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
};

export default ItemButton;
