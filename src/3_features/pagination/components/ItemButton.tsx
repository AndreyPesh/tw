import { FC } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import usePaginationStore from '../state/statePagination';

interface ItemButtonProps {
  pageNumber: number;
  linkPage: string;
  filterOptions?: {
    isFilterApplied: boolean;
    queryParamsFilter: string;
  };
}

const ItemButton: FC<ItemButtonProps> = ({
  pageNumber,
  linkPage,
  filterOptions,
}) => {
  const router = useRouter();
  const { currentPage, setCurrentPage } = usePaginationStore();

  const onSelectPageHandler = () => {
    setCurrentPage(pageNumber);
    let currentLinkPage = `${linkPage}/${pageNumber}`;
    if (filterOptions?.isFilterApplied) {
      currentLinkPage += filterOptions.queryParamsFilter;
    }
    router.push(currentLinkPage);
  };

  return (
    <>
      <li
        className={classNames(
          'mx-1 w-8 h-8 inline-flex justify-center items-center text-sm border box-border rounded cursor-pointer transform active:scale-90 transition select-none',
          { 'bg-primary text-white': pageNumber === currentPage }
        )}
        onClick={onSelectPageHandler}
      >
        {pageNumber}
      </li>
    </>
  );
};

export default ItemButton;
