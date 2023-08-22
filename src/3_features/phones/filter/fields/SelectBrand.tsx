'use client';

import { useQuery } from 'react-query';
import axios from 'axios';
import { PhoneBrands } from '@prisma/client';
import { UseFormRegisterReturn } from 'react-hook-form';

const SelectBrand = ({
  register,
}: {
  register: UseFormRegisterReturn<'brand_id'>;
}) => {
  const { data: responseBrandList } = useQuery('listBrandsPhone', async () => {
    return await axios.get<{ brandList: PhoneBrands[] }>('/api/phone/brands');
  });
  const listBrand =
    responseBrandList &&
    responseBrandList.data &&
    responseBrandList.data.brandList
      ? responseBrandList.data.brandList
      : [];

  return (
    <div className='p-4 mb-2 border rounded shadow-md'>
      <label className='font-bold mr-2'>Brand name:</label>
      <select {...register} className='p-1 w-1/2 border rounded'>
        <option value={''}>All brands</option>
        {listBrand.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBrand;
