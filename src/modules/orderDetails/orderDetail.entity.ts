import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { Order } from '../orders/order.entity';

@Table
export class OrderDetail extends Model<OrderDetail> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  orderId: number;

  @BelongsTo(() => Order)
  order: Order;
}
