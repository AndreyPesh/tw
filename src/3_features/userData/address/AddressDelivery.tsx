import { useQuery } from 'react-query';
import AddressAPI from './fetch/AddressAPI';
import { useSession } from 'next-auth/react';
import AddressData from './UI/Address';

const AddressDelivery = () => {
  const session = useSession();
  const userId = session.data?.user.id ?? '';

  const { data: response, isLoading } = useQuery(
    [userId],
    async () => await AddressAPI.getAddress(userId)
  );

  const userAddress = response?.data.address;

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="p-2 mt-2 border rounded-lg shadow-lg">
      <h2 className="font-bold">Address delivery:</h2>
      {userAddress && <AddressData address={userAddress} />}
    </div>
  );
};

export default AddressDelivery;
