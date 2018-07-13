import { IsOptional, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
export class FindUserDto {
  @ApiModelProperty({ required: false })
  @IsOptional()
  @IsString()
  _id: string;
}
