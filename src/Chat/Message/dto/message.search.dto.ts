import { IsOptional, IsNumber, IsArray, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class MessageSearchDto {
  @ApiModelProperty()
  @IsOptional()
  @IsArray()
  users: string[];
  @IsOptional()
  @IsNumber()
  type: number[];
  @IsString()
  room: string;
  @IsOptional()
  @IsString()
  limit: number;
  @IsOptional()
  @IsString()
  offset: number;
}
