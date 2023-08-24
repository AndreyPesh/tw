import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { RiFilterLine, RiFilterFill } from 'react-icons/ri';
import usePhoneFilterState from './stateFilter/state';

const StateIconFilter = () => {
  const searchParams = useSearchParams();
  const { isFilterApplied, applyPhoneFilter } = usePhoneFilterState();

  useEffect(() => {
    const currentListQueryParams = searchParams.toString();
    currentListQueryParams.length > 0 &&
      applyPhoneFilter(`?${currentListQueryParams}`);
  }, []);

  return (
    <div>
      {isFilterApplied ? (
        <RiFilterFill size={20} color="#F04438" />
      ) : (
        <RiFilterLine size={20} color="#F04438" />
      )}
    </div>
  );
};

export default StateIconFilter;
