import axios from 'axios';
import { ORDER_ROUTE } from '@/src/5_shared/api/order/routes';
import { CreateOrderData } from '../hook/usePayOrder';

class OrderFetchApi {
  createOrderFetch = async (orderData: CreateOrderData) => {
    const response = await axios.post(ORDER_ROUTE.API_ORDER, orderData);
    return response.data;
  };
}

export default new OrderFetchApi();
