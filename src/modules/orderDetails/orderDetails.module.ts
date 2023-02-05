import { Module } from '@nestjs/common';
import { ordersProvider } from './orderDetails.provider';
import { OrderDetailsService } from './orderDetails.service';

@Module({
  providers: [OrderDetailsService, ...ordersProvider],
  exports: [OrderDetailsService],
})
export class OrderDetailsModule {}
