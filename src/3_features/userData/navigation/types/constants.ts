import { MdAccountCircle } from 'react-icons/md';
import { BiPurchaseTag } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import { LiaComments } from 'react-icons/lia';
import { NavItemData } from './interfaces';
import { EnumUserAccountLink } from '@/src/5_shared/types/enum';

export const navigationList: Array<NavItemData> = [
  {
    title: 'User',
    icon: MdAccountCircle,
    link: EnumUserAccountLink.PERSONAL,
  },
  {
    title: 'Orders',
    icon: BiPurchaseTag,
    link: EnumUserAccountLink.ORDERS,
  },
  {
    title: 'Cart',
    icon: BsCart2,
    link: EnumUserAccountLink.CART,
  },
  {
    title: 'Comments',
    icon: LiaComments,
    link: EnumUserAccountLink.COMMENTS,
  },
];
