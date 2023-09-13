import { useMutation } from 'react-query';
import AddressAPI from '../fetch/AddressAPI';
import { CreateAddressData } from '../UI/form/types/interfaces';

const ADDRESS_QUERY_KEY = 'user_address';

const useAddressQuery = () => {
  const { mutateAsync: createAddressFetch, isLoading: isLoadingCreateAddress } =
    useMutation(
      [ADDRESS_QUERY_KEY],
      ({ userId, addressData }: CreateAddressData) => {
        return AddressAPI.createAddress(userId, addressData);
      },
      {
        // onSuccess: updateStateCart
      }
    );

  const isLoading = isLoadingCreateAddress;

  return { createAddressFetch, isLoading };
};

export default useAddressQuery;
