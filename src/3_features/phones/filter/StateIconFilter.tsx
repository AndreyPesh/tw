import { RiFilterLine, RiFilterFill } from 'react-icons/ri';
import usePhoneFilterState from './stateFilter/state';

const StateIconFilter = () => {
  const { isFilterApplied } = usePhoneFilterState();
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
