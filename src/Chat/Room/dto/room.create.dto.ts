import { IsString, IsOptional, IsBoolean } from 'class-validator';
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
  @IsOptional()
  @IsBoolean()
  join: boolean;
}
