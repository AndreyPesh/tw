import { FC } from 'react';

const ItemButton: FC<{ pageNumber: number }> = ({ pageNumber }) => {
  return <li className='mx-1 w-8 h-8 inline-flex justify-center items-center text-sm border box-border rounded cursor-pointer transform active:scale-90 transition select-none'>{pageNumber}</li>;
};

export default ItemButton;
