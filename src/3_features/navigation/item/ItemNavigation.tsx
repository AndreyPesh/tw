import { EnumLinkPage } from '@/src/5_shared/types/enum';
import Link from 'next/link';
import { FC } from 'react';

interface ItemNavigationProps {
  name: string;
  link: EnumLinkPage;
}

const ItemNavigation: FC<ItemNavigationProps> = ({ name, link }) => {
  return <Link href={link} className='inline-flex w-full px-10 py-3 md:p-5 md:w-auto'>{name}</Link>;
};

export default ItemNavigation;
