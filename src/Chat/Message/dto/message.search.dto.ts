import { IsOptional, IsNumber, IsArray } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class MessageSearchDto {
  @ApiModelProperty()
  @IsOptional()
  @IsArray()
  users: string[];
  @IsNumber()
  type: number[];
  @IsArray()
  room: string;
}
