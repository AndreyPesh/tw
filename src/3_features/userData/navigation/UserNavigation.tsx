'use client';

import React, { useState, MouseEvent, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NavItem from './ui/NavItem';
import { navigationList } from './types/constants';
import { getCurrentSegmentFromPath } from './helper/transformPath';

const UserNavigation = () => {
  const [activeItemDataset, setActiveItemDataset] = useState('');

  const path = usePathname();

  const navigateHandler = (event: MouseEvent<HTMLDivElement>) => {
    const node = event.target as HTMLDivElement;
    const dataset = node.dataset.item;
    if (dataset) {
      setActiveItemDataset(dataset);
    }
  };

  useEffect(() => {
    const currentSegmentPath = getCurrentSegmentFromPath(path);
    currentSegmentPath && setActiveItemDataset(currentSegmentPath);
  }, []);

  return (
    <nav onClick={navigateHandler}>
      <ul className="py-2">
        {navigationList.map((navItemData) => (
          <NavItem
            key={navItemData.title}
            {...navItemData}
            isActive={activeItemDataset === navItemData.title}
          />
        ))}
      </ul>
    </nav>
  );
};

export default UserNavigation;
