import { Order } from './order.entity';
import { ORDER_REPOSITORY } from '../../core/constants';

export const ordersProvider = [
  {
    provide: ORDER_REPOSITORY,
    useValue: Order,
  },
];
