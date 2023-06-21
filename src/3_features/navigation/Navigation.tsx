import { listNav } from '@/src/5_shared/utils/listNav';
import ItemNavigation from './item/ItemNavigation';

const Navigation = () => {
  return (
    <nav className='inline-flex w-1/2 justify-around items-center'>
      {listNav.map((item) => (
        <ItemNavigation key={item.link} name={item.name} link={item.link} />
      ))}
    </nav>
  );
};

export default Navigation;
