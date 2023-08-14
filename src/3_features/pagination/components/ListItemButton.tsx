import { FC } from 'react';
import ItemButton from './ItemButton';
import { MAX_ITEMS_BUTTON } from '../types/constants';
import usePaginationStore from '../state/statePagination';

interface ListItemButtonProps {
  numberPages: number;
}

const ListItemButton: FC<ListItemButtonProps> = ({ numberPages }) => {
  const listItemButton = new Array(numberPages).fill('');
  return (
    <>
      {listItemButton.map((_, index) => (
        <ItemButton key={index} pageNumber={index + 1} />
      ))}
    </>
  );
};

export default ListItemButton;
