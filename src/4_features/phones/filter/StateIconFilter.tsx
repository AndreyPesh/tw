import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { RiFilterLine, RiFilterFill } from 'react-icons/ri';
import { BsArrowDownCircle } from 'react-icons/bs';
import usePhoneFilterState from './stateFilter/state';

const StateIconFilter = ({ isShow }: { isShow: boolean }) => {
  const searchParams = useSearchParams();
  const { isFilterApplied, applyPhoneFilter } = usePhoneFilterState();

  useEffect(() => {
    const currentListQueryParams = searchParams.toString();
    currentListQueryParams.length > 0 &&
      applyPhoneFilter(`?${currentListQueryParams}`);
  }, []);

  return (
    <div className="flex w-full items-center justify-between">
      {isFilterApplied ? (
        <RiFilterFill size={20} color="#F04438" />
      ) : (
        <RiFilterLine size={20} color="#F04438" />
      )}
      {isShow ? <BsArrowDownCircle size={20} className='rotate-180 cursor-pointer' /> : <BsArrowDownCircle size={20} className='cursor-pointer' />}
    </div>
  );
};

export default StateIconFilter;
