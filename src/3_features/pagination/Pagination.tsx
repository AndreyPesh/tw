'use client';

import { FC, useEffect } from 'react';
import PrevNextButton from './components/PrevNextButton';
import { TypeButtonPagination } from './types/enums';
import ListItemButton from './components/ListItemButton';
import usePaginationStore from './state/statePagination';

interface PaginationProps {
  initPage: number;
  itemsCount: number;
  perPage: number;
  linkPage: string;
}

const Pagination: FC<PaginationProps> = ({
  initPage,
  itemsCount,
  perPage,
  linkPage,
}) => {
  const { currentPage, setCurrentPage } = usePaginationStore();
  const MAX_PAGE = Math.ceil(itemsCount / perPage);

  useEffect(() => {
    setCurrentPage(initPage);
  }, []);

  return (
    <>
      <ul className="flex justify-center">
        <PrevNextButton type={TypeButtonPagination.PREV} linkPage={linkPage} />
        <ListItemButton numberPages={MAX_PAGE} linkPage={linkPage} />
        <PrevNextButton
          type={TypeButtonPagination.NEXT}
          linkPage={linkPage}
          maxPage={MAX_PAGE}
        />
      </ul>
    </>
  );
};

export default Pagination;
