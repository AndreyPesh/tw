import { listNav } from '@/src/5_shared/utils/listNav';
import ItemNavigation from './item/ItemNavigation';

const Navigation = () => {
  return (
    <nav className='flex flex-col w-full md:inline-flex md:flex-row md:w-1/2 md:py-0 justify-around items-center select-none'>
      {listNav.map((item) => (
        <ItemNavigation key={item.link} name={item.name} link={item.link} />
      ))}
    </nav>
  );
};

export default Navigation;
