import { useState } from 'react';
import classNames from 'classnames';
import { useQuery } from 'react-query';
import AddressAPI from './fetch/AddressAPI';
import { useSession } from 'next-auth/react';
import AddressData from './UI/Address';
import AddressForm from './UI/form/AddressForm';
import { filterAddress } from './helpers/filter';

const AddressDelivery = () => {
  const [isShowEditAddressForm, setIsShowEditAddressForm] = useState(false);
  const session = useSession();
  const userId = session.data?.user.id ?? '';

  const { data: response, isLoading } = useQuery(
    [userId],
    async () => await AddressAPI.getAddress(userId)
  );

  const userAddress = response?.data.address ? response?.data.address : null;

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
          {userAddress && (
            <AddressData
              address={userAddress}
              changeHandler={setIsShowEditAddressForm}
            />
          )}
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
