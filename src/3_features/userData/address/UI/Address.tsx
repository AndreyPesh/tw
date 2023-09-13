import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import { Address } from '@prisma/client';
import { Dispatch, FC, SetStateAction } from 'react';

interface AddressDataProps {
  address: Address;
  changeHandler: Dispatch<SetStateAction<boolean>>;
}

const AddressData: FC<AddressDataProps> = ({ address, changeHandler }) => {
  return (
    <div>
      <h3 className="py-1">Country: {address.country}</h3>
      <h3 className="py-1">City: {address.city}</h3>
      <h3 className="py-1">Street: {address.street}</h3>
      <h3 className="py-1">Building: {address.building}</h3>
      <h3 className="py-1">Post code: {address.postCode}</h3>
      <Button
        variant={EnumTypeButton.DANGER}
        handler={() => changeHandler(true)}
      >
        Change address
      </Button>
    </div>
  );
};

export default AddressData;
