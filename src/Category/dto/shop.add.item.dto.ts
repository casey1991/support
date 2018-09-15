import {
  IsEmail,
  IsString,
  Length,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class ShopAddItemDto {
  @IsString()
  name: string;
  @IsNumber()
  price: string;
  @IsString()
  shop: string;
}
