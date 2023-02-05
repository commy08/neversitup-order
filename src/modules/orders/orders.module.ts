import { Module } from '@nestjs/common';
import { OrderDetailsModule } from '../orderDetails/orderDetails.module';
import { OrdersController } from './orders.controller';
import { ordersProvider } from './orders.provider';
import { OrdersService } from './orders.service';

@Module({
  controllers: [OrdersController],
  providers: [...ordersProvider, OrdersService],
  imports: [OrderDetailsModule],
})
export class OrdersModule {}
