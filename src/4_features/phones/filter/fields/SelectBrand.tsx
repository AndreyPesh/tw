'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { PhoneBrands } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form';
import { FilterPhoneQueryParams } from '../types/interfaces';

const SelectBrand = ({
  register,
  setValue,
}: {
  register: UseFormRegisterReturn<'brand_id'>;
  setValue: UseFormSetValue<FilterPhoneQueryParams>;
}) => {
  const searchParams = useSearchParams();
  const { data: responseBrandList } = useQuery('listBrandsPhone', async () => {
    return await axios.get<{ brandList: PhoneBrands[] }>('/api/phone/brands');
  });
  const listBrand =
    responseBrandList &&
    responseBrandList.data &&
    responseBrandList.data.brandList
      ? responseBrandList.data.brandList
      : [];

  useEffect(() => {
    const selectedBrandId = searchParams.get('brand_id');
    const selectedBrand = listBrand.find(
      (brand) => brand.id === selectedBrandId
    );
    selectedBrand && setValue('brand_id', selectedBrand.id);
  }, [listBrand]);

  return (
    <div className="p-4 mb-2 border rounded shadow-md">
      <label className="font-bold mr-2">Brand name:</label>
      <select {...register} className="p-1 w-1/2 border rounded">
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
