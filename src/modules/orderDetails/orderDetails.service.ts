import { Inject, Injectable } from '@nestjs/common';
import { ORDER_DETAIL_REPOSITORY } from '../../core/constants';
import { OrderDetailsDto } from './dto/orderDetail.dto';
import { OrderDetail } from './orderDetail.entity';

@Injectable()
export class OrderDetailsService {
  constructor(
    @Inject(ORDER_DETAIL_REPOSITORY)
    private readonly orderDetailRepository: typeof OrderDetail,
  ) {}

  async createOrder(
    orderDetails: OrderDetailsDto,
    orderId: number,
  ): Promise<OrderDetail[]> {
    const createOrderDetails = orderDetails.orders.map((order) => {
      return {
        ...order,
        orderId,
      };
    });

    return this.orderDetailRepository.bulkCreate(createOrderDetails);
  }
}
