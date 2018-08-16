import { IsString, IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class RoomCreateDto {
  @ApiModelProperty()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  avatar: string;
  @IsOptional()
  @IsString()
  host: string;
}
