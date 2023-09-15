import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useSession } from 'next-auth/react';
import AddressAPI from '../fetch/AddressAPI';
import { AddressData } from '../UI/form/types/types';

const ADDRESS_QUERY_KEY = 'user_address';

const useAddressQuery = () => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const userId = session?.user.id ?? '';

  const updateStateAddress = () => {
    queryClient.invalidateQueries([ADDRESS_QUERY_KEY, userId]);
  };

  const { data: responseAddress, isLoading: isLoadingAddress } = useQuery(
    [ADDRESS_QUERY_KEY, userId],
    () => AddressAPI.getAddress(userId)
  );

  const { mutateAsync: createAddressFetch, isLoading: isLoadingCreateAddress } =
    useMutation(
      [ADDRESS_QUERY_KEY, userId],
      ({ addressData }: { addressData: AddressData }) => {
        return AddressAPI.createAddress(userId, addressData);
      },
      {
        onSuccess: updateStateAddress,
      }
    );

  const { mutateAsync: updateAddressFetch, isLoading: isLoadingUpdateAddress } =
    useMutation(
      [ADDRESS_QUERY_KEY, userId],
      ({ addressData }: { addressData: AddressData }) => {
        return AddressAPI.updateAddress(userId, addressData);
      },
      {
        onSuccess: updateStateAddress,
      }
    );

  const isLoading =
    isLoadingCreateAddress || isLoadingAddress || isLoadingUpdateAddress;
  const userAddress = responseAddress?.address ?? null;

  return { userAddress, createAddressFetch, updateAddressFetch, isLoading };
};

export default useAddressQuery;
