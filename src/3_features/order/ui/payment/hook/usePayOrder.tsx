import { useMutation, useQueryClient } from 'react-query';
import { useSession } from 'next-auth/react';
import OrderFetchApi from '../fetch/OrderFetchApi';
import useOrderStore from '../../../state/state';

const QUERY_ORDER_KEY = 'order';

export interface CreateOrderData {
  quantity: number;
  price: number;
  productId: string;
  userId: string;
}

const usePayOrder = () => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const { productId } = useOrderStore();
  const userId = session?.user.id ?? '';

  const updateOrderList = () => {
    queryClient.invalidateQueries([QUERY_ORDER_KEY, userId]);
  };

  const { mutateAsync: createOrderFetch, isLoading: isLoadingCreateOrder } =
    useMutation(
      [QUERY_ORDER_KEY, userId],
      ({ quantity, price }: { quantity: number; price: number }) => {
        return OrderFetchApi.createOrderFetch({
          quantity,
          price,
          productId,
          userId,
        });
      },
      {
        onSuccess: updateOrderList,
      }
    );

  const isLoading = isLoadingCreateOrder;

  return { createOrderFetch, isLoading };
};

export default usePayOrder;
