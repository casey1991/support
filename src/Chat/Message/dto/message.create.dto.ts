import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class MessageCreateDto {
  @ApiModelProperty()
  @IsOptional()
  @IsString()
  user: string;
  @IsOptional()
  data: object;
  @IsOptional()
  @IsString()
  text: string;
  @IsNumber()
  type: number;
  @IsString()
  room: string;
}
