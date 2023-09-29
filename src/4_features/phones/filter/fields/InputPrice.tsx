import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form';
import { FilterPhoneQueryParams } from '../types/interfaces';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const InputPrice = ({
  register_min,
  register_max,
  setValue,
}: {
  register_min: UseFormRegisterReturn<'price_min'>;
  register_max: UseFormRegisterReturn<'price_max'>;
  setValue: UseFormSetValue<FilterPhoneQueryParams>;
}) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const priceMinQueryParam = searchParams.get('price_min');
    const priceMaxQueryParam = searchParams.get('price_max');
    priceMinQueryParam && setValue('price_min', Number(priceMinQueryParam));
    priceMaxQueryParam && setValue('price_max', Number(priceMaxQueryParam));
  }, []);

  return (
    <div className="p-2 mb-2 border rounded shadow-md">
      <label className="font-bold mr-2">Price:</label>
      <input
        className="p-1 border rounded w-20"
        type="number"
        placeholder="From"
        min={1}
        {...register_min}
      ></input>
      <input
        className="p-1 ml-3 mr-3 border rounded w-20"
        placeholder="To"
        type="number"
        min={1}
        {...register_max}
      ></input>
      <span>&#36;</span>
    </div>
  );
};

export default InputPrice;
