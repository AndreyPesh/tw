import classNames from 'classnames';
import { NavItemData } from '../types/interfaces';
import Link from 'next/link';

interface NavItemProps extends NavItemData {
  isActive: boolean;
}

const NavItem = ({ title, link, icon: Icon, isActive }: NavItemProps) => {
  return (
    <li>
      <Link
        href={link}
        className={classNames(
          'p-4 flex justify-center sm:justify-start border border-transparent rounded-lg cursor-pointer select-none hover:border-slate-200',
          { 'font-bold border-slate-300 shadow': isActive }
        )}
        data-item={title}
      >
        <span className="sm:mr-2 pointer-events-none">
          <Icon size={25} color={isActive ? 'black' : 'gray'} />
        </span>
        <span className='hidden sm:inline pointer-events-none'>{title}</span>
      </Link>
    </li>
  );
};

export default NavItem;
