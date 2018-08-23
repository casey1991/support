import { IsEmail, IsString, Length, IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class ShopCreateDto {
  @ApiModelProperty()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  host: string;
}
