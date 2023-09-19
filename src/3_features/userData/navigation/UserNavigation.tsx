import React from 'react';
import NavItem from './ui/NavItem';
import { navigationList } from './types/constants';

const UserNavigation = () => {
  return (
    <nav>
      <ul>
        {navigationList.map((navItemData) => (
          <NavItem {...navItemData} />
        ))}
      </ul>
    </nav>
  );
};

export default UserNavigation;
