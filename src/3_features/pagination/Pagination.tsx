'use client';

import { FC, useEffect } from 'react';
import PrevNextButton from './components/PrevNextButton';
import { TypeButtonPagination } from './types/enums';
import ListItemButton from './components/ListItemButton';
import usePaginationStore from './state/statePagination';
import usePhoneFilterState from '../phones/filter/stateFilter/state';

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
  const { isFilterApplied, currentQueryParamsFilter } = usePhoneFilterState();
  const { setCurrentPage } = usePaginationStore();
  const MAX_PAGE = Math.ceil(itemsCount / perPage);

  useEffect(() => {
    setCurrentPage(initPage);
  }, []);

  return (
    <>
      <ul className="flex justify-center">
        <PrevNextButton
          type={TypeButtonPagination.PREV}
          linkPage={linkPage}
          filterOptions={{
            isFilterApplied,
            queryParamsFilter: currentQueryParamsFilter,
          }}
        />
        <ListItemButton numberPages={MAX_PAGE} linkPage={linkPage} />
        <PrevNextButton
          type={TypeButtonPagination.NEXT}
          linkPage={linkPage}
          maxPage={MAX_PAGE}
          filterOptions={{
            isFilterApplied,
            queryParamsFilter: currentQueryParamsFilter,
          }}
        />
      </ul>
    </>
  );
};

export default Pagination;
