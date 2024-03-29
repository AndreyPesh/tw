import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { EnumLinkPage } from '@/src/5_shared/types/enum';
import usePhoneFilterState from '../../phones/filter/stateFilter/state';

interface ItemNavigationProps {
  name: string;
  link: EnumLinkPage;
}

const ItemNavigation: FC<ItemNavigationProps> = ({ name, link }) => {
  const [queryParams, setQueryParams] = useState<string>('');
  const { isFilterApplied, currentQueryParamsFilter } = usePhoneFilterState();
  useEffect(() => {
    if (isFilterApplied && link === EnumLinkPage.PRODUCTS) {
      setQueryParams(currentQueryParamsFilter);
    }
    if (!isFilterApplied) {
      setQueryParams('');
    }
  }, [isFilterApplied, currentQueryParamsFilter]);
  return (
    <Link
      href={link + queryParams}
      className="inline-flex w-full px-10 py-3 md:p-5 md:w-auto"
    >
      {name}
    </Link>
  );
};

export default ItemNavigation;
