import classNames from 'classnames';
import { NavItemData } from '../types/interfaces';

interface NavItemProps extends NavItemData {
  isActive: boolean;
}

const NavItem = ({ title, icon: Icon, isActive }: NavItemProps) => {
  return (
    <li
      className={classNames("p-4 flex border border-transparent rounded-lg cursor-pointer select-none hover:border-slate-200", {'font-bold border-slate-300 shadow': isActive})}
      data-item={title}
    >
      <span className="mr-2">
        <Icon size={25} color={isActive ? "black" : "gray"} />
      </span>
      {title}
    </li>
  );
};

export default NavItem;
