import React, { useState, MouseEvent } from 'react';
import NavItem from './ui/NavItem';
import { navigationList } from './types/constants';

const UserNavigation = () => {
  const [activeItemDataset, setActiveItemDataset] = useState(
    navigationList[0].title
  );

  const navigateHandler = (event: MouseEvent<HTMLDivElement>) => {
    const node = event.target as HTMLDivElement;
    const dataset = node.dataset.item;
    if (dataset) {
      setActiveItemDataset(dataset);
    }
  };

  return (
    <nav onClick={navigateHandler}>
      <ul>
        {navigationList.map((navItemData) => (
          <NavItem
            {...navItemData}
            isActive={activeItemDataset === navItemData.title}
          />
        ))}
      </ul>
    </nav>
  );
};

export default UserNavigation;
