import { IsString, IsOptional, IsBoolean, IsArray } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class RoomSearchDto {
  @ApiModelProperty()
  @IsOptional()
  @IsArray()
  _ids: string[];
  @IsOptional()
  @IsArray()
  _userIds: string[];
  @IsOptional()
  @IsArray()
  hosts: string[];
}
