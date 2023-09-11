import { useQuery } from 'react-query';
import AddressAPI from './fetch/AddressAPI';
import { useSession } from 'next-auth/react';

const AddressDelivery = () => {
  const session = useSession();
  const userId = session.data?.user.id ?? '';

  const { data: response } = useQuery(
    [userId],
    async () => await AddressAPI.getAddress(userId)
  );

  return <div>City: {response?.data.data.city ?? 'Not city'}</div>;
};

export default AddressDelivery;
