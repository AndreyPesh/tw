'use client';

import InputRange from './fields/InputRange';
import { useForm } from 'react-hook-form';
import SelectBrand from './fields/SelectBrand';

const enum TypePriceSort {
  descending = 'desc',
  ascending = 'asc',
}

interface FilterFormState {
  brandId: string | null;
  // price: { min: number; max: number };
  // rating: number;
  // priceSort: TypePriceSort | null;
}

const FilterForm = () => {
  const { register, handleSubmit } = useForm<FilterFormState>();
  const onSubmitFilter = handleSubmit((data) => console.log(data));

  return (
    <div className="w-1/3">
      <h3>Filter form</h3>
      <form onSubmit={onSubmitFilter}>
        <SelectBrand register={register('brandId')} />
        <div className="p-2 border rounded">
          <label>Price:</label>
          <span>From</span>
          <input className="w-20 border rounded" type="number"></input>
          <span>To</span>
          <input className="w-20 border rounded" type="number"></input>
          <span>&#36;</span>
        </div>
        <InputRange />
        <div>
          <h3>Sorting</h3>
          <input
            type="radio"
            id="sortingPrice1"
            name="sorting_price"
            value="cheaper"
          />
          <label htmlFor="sortingPrice1">Cheaper</label>

          <input
            type="radio"
            id="sortingPrice2"
            name="sorting_price"
            value="expensive"
          />
          <label htmlFor="sortingPrice2">More expensive</label>
        </div>
        <button type="submit">Apply filter</button>
      </form>
    </div>
  );
};

export default FilterForm;
