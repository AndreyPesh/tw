import { NavItemData } from '../types/interfaces';

const NavItem = ({ title, icon: Icon }: NavItemData) => {
  return (
    <li className="p-4 flex border border-transparent rounded-lg cursor-pointer select-none hover:border-slate-200">
      <span className="mr-2">
        <Icon size={25} color="gray" />
      </span>
      {title}
    </li>
  );
};

export default NavItem;
