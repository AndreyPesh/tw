import { FC } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import usePaginationStore from '../state/statePagination';

const ItemButton: FC<{ pageNumber: number; linkPage: string }> = ({
  pageNumber,
  linkPage,
}) => {
  const router = useRouter();
  const { currentPage, setCurrentPage } = usePaginationStore();

  return (
    <>
      <li
        className={classNames(
          'mx-1 w-8 h-8 inline-flex justify-center items-center text-sm border box-border rounded cursor-pointer transform active:scale-90 transition select-none',
          { 'bg-primary text-white': pageNumber === currentPage }
        )}
        onClick={() => {
          setCurrentPage(pageNumber);
          router.push(`${linkPage}/${pageNumber}`);
        }}
      >
        {pageNumber}
      </li>
    </>
  );
};

export default ItemButton;
