import { EnumLinkPage } from '@/src/5_shared/types/enum';
import Link from 'next/link';
import { FC } from 'react';

interface ItemNavigationProps {
  name: string;
  link: EnumLinkPage;
}

const ItemNavigation: FC<ItemNavigationProps> = ({ name, link }) => {
  return <Link href={link} className=''>{name}</Link>;
};

export default ItemNavigation;
