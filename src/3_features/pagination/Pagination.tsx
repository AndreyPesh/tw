'use client';
import React, { Dispatch, SetStateAction, MouseEvent, useState } from 'react';
import { data } from './JSON';
import PrevNextButton from './components/PrevNextButton';
import { TypeButtonPagination } from './types/enums';
import ListItemButton from './components/ListItemButton';

const NUMBER_ITEM_ON_PAGE = 5;

interface PaginationProps {
  currentPage?: number;
  limitItems?: number;
  numberRecords?: number;
  limitPages?: number;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
}

const Pagination = ({}: // currentPage,
// limitItems,
// limitPages,
// numberRecords,
// setCurrentPage,
PaginationProps) => {
  // const limitItems = 5;
  // const limitPages = 10;
  // const numberRecords = data.length;
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const numberPages = Math.ceil(numberRecords / limitItems);

  // const selectPageHandler = (event: MouseEvent<HTMLElement>) => {
  //   const { target } = event;
  //   if (!(target instanceof HTMLLIElement)) {
  //     return;
  //   }
  //   const { page } = target.dataset;
  //   if (page) {
  //     setCurrentPage(() => Number(page));
  //   }
  // };

  // const listPages = [];
  // for (let page = FIRST_PAGE; page <= numberPages; page++) {
  //   listPages.push(
  //     <ItemPagination
  //       pageNumber={page}
  //       currentPage={currentPage}
  //       selectPageHandler={selectPageHandler}
  //       key={page}
  //     />
  //   );
  // }

  return (
    <ul className="flex justify-center">
      <PrevNextButton
        type={TypeButtonPagination.PREV}
        // togglePage={setCurrentPage}
        // isDisableButton={currentPage === FIRST_PAGE}
      />
      <ListItemButton numberPages={10} />
      <PrevNextButton
        type={TypeButtonPagination.NEXT}
        // togglePage={setCurrentPage}
        // isDisableButton={currentPage === numberPages}
        // maxPage={numberPages}
      />
    </ul>
  );
};

export default Pagination;
