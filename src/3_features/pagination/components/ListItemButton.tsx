import { FC } from 'react';
import ItemButton from './ItemButton';

interface ListItemButtonProps {
  numberPages: number;
  linkPage: string;
  filterOptions?: {
    isFilterApplied: boolean;
    queryParamsFilter: string;
  };
}

const ListItemButton: FC<ListItemButtonProps> = ({
  numberPages,
  linkPage,
  filterOptions,
}) => {
  const listItemButton = new Array(numberPages).fill('');
  return (
    <>
      {listItemButton.map((_, index) => (
        <ItemButton
          key={index}
          pageNumber={index + 1}
          linkPage={linkPage}
          filterOptions={filterOptions}
        />
      ))}
    </>
  );
};

export default ListItemButton;
