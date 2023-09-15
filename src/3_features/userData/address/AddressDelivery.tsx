import { useState } from 'react';
import classNames from 'classnames';
import AddressData from './UI/Address';
import AddressForm from './UI/form/AddressForm';
import { filterAddress } from './helpers/filter';
import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import useAddressQuery from './hooks/useAddressQuery';

const AddressDelivery = () => {
  const [isShowEditAddressForm, setIsShowEditAddressForm] = useState(false);
  const { userAddress, isLoading } = useAddressQuery();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="mt-2 w-full  text-sm border rounded-lg shadow-lg overflow-hidden">
      <div
        className={classNames('w-full flex transition-all', {
          'translate-x-[-100%]': isShowEditAddressForm,
        })}
      >
        <div className="p-2 w-full min-w-[100%]">
          <h2 className="font-bold">Address delivery:</h2>
          {userAddress ? (
            <AddressData address={userAddress} />
          ) : (
            <h2>Address is not specified</h2>
          )}
          <Button
            variant={EnumTypeButton.DANGER}
            handler={() => setIsShowEditAddressForm(true)}
          >
            {userAddress ? 'Update address' : 'Add address'}
          </Button>
        </div>
        <div className="p-2 w-full min-w-[100%]">
          <h2 className="font-bold">Edit address delivery:</h2>
          <AddressForm
            addressData={filterAddress(userAddress)}
            hideFormHandler={setIsShowEditAddressForm}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressDelivery;
