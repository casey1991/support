import { IsEmail, IsString, Length, IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
export class CreateUserDto extends User {
  @ApiModelProperty()
  @IsString()
  name: string;
}
