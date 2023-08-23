import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { RiFilterLine, RiFilterFill } from 'react-icons/ri';
import usePhoneFilterState from './stateFilter/state';
import { UseFormGetValues } from 'react-hook-form';
import { FilterPhoneQueryParams } from './types/interfaces';
import { createFilterQueryParamsFromFormData } from './helpers/createFilterUrlFromFormData';

const StateIconFilter = ({
  getValues,
}: {
  getValues: UseFormGetValues<FilterPhoneQueryParams>;
}) => {
  const searchParams = useSearchParams();
  const { isFilterApplied } = usePhoneFilterState();

  useEffect(() => {
    const queryParams: Record<string, unknown> = {}
    const listKeyQueryParams = Object.keys(getValues())
    listKeyQueryParams.map(queryParamKey => {
      const value = searchParams.get(queryParamKey)
      if(value) {
        queryParams[queryParamKey] = value
      }
    })
    // @ts-ignore
    const request = createFilterQueryParamsFromFormData(queryParams)
    console.log(request)
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
