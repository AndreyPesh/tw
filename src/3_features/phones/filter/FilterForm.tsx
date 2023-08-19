'use client';

import { useQuery } from 'react-query';
import axios from 'axios';
import { PhoneBrands } from '@prisma/client';

const FilterForm = () => {
  const { data: responseBrandList } = useQuery('listBrandsPhone', async () => {
    return await axios.get<{ brandList: PhoneBrands[] }>('/api/phone/brands');
  });

  return (
    <div className="w-1/3">
      <h3>Filter form</h3>
      <form action="">
        <div>
          <label>Name:</label>
          <select name="phone_name">
            {responseBrandList &&
              responseBrandList.data.brandList.length > 0 &&
              responseBrandList.data.brandList.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
          </select>
        </div>
        <div className="p-2 border rounded">
          <label>Price:</label>
          <span>From</span>
          <input className="w-20 border rounded" type="number"></input>
          <span>To</span>
          <input className="w-20 border rounded" type="number"></input>
          <span>&#36;</span>
        </div>
        <div>
          <input type="range" step={1} max={5} />
        </div>
        <button type="button">Apply filter</button>
      </form>
    </div>
  );
};

export default FilterForm;
