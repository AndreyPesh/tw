'use client';

import { data } from './JSON';
import PrevNextButton from './components/PrevNextButton';
import { TypeButtonPagination } from './types/enums';
import ListItemButton from './components/ListItemButton';
import usePaginationStore from './state/statePagination';

const Pagination = () => {
  const { currentPage } = usePaginationStore();
  const MAX_PAGE = 10;

  return (
    <>
      <h1>Current page: {currentPage}</h1>
      <ul className="flex justify-center">
        <PrevNextButton type={TypeButtonPagination.PREV} />
        <ListItemButton numberPages={MAX_PAGE} />
        <PrevNextButton type={TypeButtonPagination.NEXT} maxPage={MAX_PAGE} />
      </ul>
    </>
  );
};

export default Pagination;
