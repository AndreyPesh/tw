import { FC } from 'react';
import { Address } from '@prisma/client';

interface AddressDataProps {
  address: Address;
}

const AddressData: FC<AddressDataProps> = ({ address }) => {
  return (
    <div>
      <h3 className="py-1">Country: {address.country}</h3>
      <h3 className="py-1">City: {address.city}</h3>
      <h3 className="py-1">Street: {address.street}</h3>
      <h3 className="py-1">Building: {address.building}</h3>
      <h3 className="py-1">Post code: {address.postCode}</h3>
    </div>
  );
};

export default AddressData;
