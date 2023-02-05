import { OrderDetail } from './orderDetail.entity';
import { ORDER_DETAIL_REPOSITORY } from '../../core/constants';

export const ordersProvider = [
  {
    provide: ORDER_DETAIL_REPOSITORY,
    useValue: OrderDetail,
  },
];
