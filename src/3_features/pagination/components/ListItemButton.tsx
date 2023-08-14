import { FC } from 'react';
import ItemButton from './ItemButton';

interface ListItemButtonProps {
  numberPages: number
}

const ListItemButton: FC<ListItemButtonProps> = ({numberPages}) => {
  const list = new Array(numberPages).fill('');
  return (
    <>
      {list.map((_, index) => (
        <ItemButton key={index} pageNumber={index + 1} />
      ))}
    </>
  );
};

export default ListItemButton;
