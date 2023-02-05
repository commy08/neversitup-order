import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrderDetailsDto } from '../orderDetails/dto/orderDetail.dto';
import { OrderDetailsService } from '../orderDetails/orderDetails.service';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly orderService: OrdersService,
    private readonly orderDetailService: OrderDetailsService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() orders: OrderDetailsDto, @Request() req) {
    const order = await this.orderService.create(req.user.id);

    const orderDetails = await this.orderDetailService.createOrder(
      orders,
      order.id,
    );

    return {
      order: { ...order.dataValues, orderDetails: orderDetails },
    };
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id/cancel')
  async cancelOrder(@Param('id') id: number, @Request() req) {
    const order = await this.orderService.cancelOrder(id, req.user.id);
    return order[0];
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getOrderDetailsById(@Param('id') id: number) {
    const order = await this.orderService.getOrderDetailByOrderId(id);
    return order;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getOrderDetails(@Request() req) {
    const order = await this.orderService.getOrderDetailByUserId(req.user.id);
    return order;
  }
}
