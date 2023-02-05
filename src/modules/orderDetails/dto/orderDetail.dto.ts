import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';

class OrderDetail {
  @IsNotEmpty()
  readonly productId: number;

  @IsNotEmpty()
  readonly quantity: number;
}

export class OrderDetailsDto {
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => OrderDetail)
  orders: OrderDetail[];
}
