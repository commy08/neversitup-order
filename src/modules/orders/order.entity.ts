import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { OrderDetail } from '../orderDetails/orderDetail.entity';

@Table
export class Order extends Model<Order> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Column({
    type: DataType.ENUM,
    values: ['init', 'cancel'],
    allowNull: false,
  })
  status: string;

  @HasMany(() => OrderDetail)
  orderDetails: OrderDetail;
}
