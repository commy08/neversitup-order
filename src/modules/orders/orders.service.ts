import { Inject, Injectable } from '@nestjs/common';
import { ORDER_REPOSITORY } from '../../core/constants';
import { OrderDetail } from '../orderDetails/orderDetail.entity';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ORDER_REPOSITORY) private readonly orderRepository: typeof Order,
  ) {}

  async create(userId: number): Promise<Order> {
    return this.orderRepository.create({ userId, status: 'init' });
  }

  async getOrderByUserId(userId: number): Promise<Order[]> {
    return this.orderRepository.findAll({
      where: { userId },
    });
  }

  async getOrderDetailByOrderId(Id: number) {
    return this.orderRepository.findByPk(Id, {
      include: [
        {
          model: OrderDetail,
          attributes: { exclude: ['orderId'] },
        },
      ],
    });
  }

  async getOrderDetailByUserId(userId: number) {
    console.log(userId);
    return this.orderRepository.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: OrderDetail,
          attributes: { exclude: ['orderId'] },
        },
      ],
    });
  }

  async cancelOrder(id: number, userId: number): Promise<Order[]> {
    const [, order] = await this.orderRepository.update(
      {
        status: 'cancel',
      },
      {
        where: {
          id,
          userId,
        },
        returning: true,
      },
    );

    return order;
  }
}
