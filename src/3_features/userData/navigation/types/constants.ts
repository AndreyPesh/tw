import { MdAccountCircle } from 'react-icons/md';
import { BiPurchaseTag } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import { LiaComments } from 'react-icons/lia';
import { NavItemData } from './interfaces';

export const navigationList: Array<NavItemData> = [
  {
    title: 'User',
    icon: MdAccountCircle,
  },
  {
    title: 'Orders',
    icon: BiPurchaseTag,
  },
  {
    title: 'Cart',
    icon: BsCart2,
  },
  {
    title: 'Comments',
    icon: LiaComments,
  },
];
