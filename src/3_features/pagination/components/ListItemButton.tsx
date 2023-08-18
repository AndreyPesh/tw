import { FC } from 'react';
import ItemButton from './ItemButton';

interface ListItemButtonProps {
  numberPages: number;
  linkPage: string;
}

const ListItemButton: FC<ListItemButtonProps> = ({ numberPages, linkPage }) => {
  const listItemButton = new Array(numberPages).fill('');
  return (
    <>
      {listItemButton.map((_, index) => (
        <ItemButton key={index} pageNumber={index + 1} linkPage={linkPage} />
      ))}
    </>
  );
};

export default ListItemButton;
