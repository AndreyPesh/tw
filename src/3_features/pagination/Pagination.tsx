'use client';

import { data } from './JSON';
import PrevNextButton from './components/PrevNextButton';
import { TypeButtonPagination } from './types/enums';
import ListItemButton from './components/ListItemButton';
import usePaginationStore from './state/statePagination';

const Pagination = () => {
  const { currentPage } = usePaginationStore();

  return (
    <>
      <h1>Current page: {currentPage}</h1>
      <ul className="flex justify-center">
        <PrevNextButton type={TypeButtonPagination.PREV} />
        <ListItemButton numberPages={10} />
        <PrevNextButton type={TypeButtonPagination.NEXT} maxPage={10} />
      </ul>
    </>
  );
};

export default Pagination;
