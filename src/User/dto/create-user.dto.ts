import { IsEmail, IsString, Length } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
export class CreateUserDto extends User {
  @ApiModelProperty()
  @IsString()
  name: string;
  @ApiModelProperty()
  @IsEmail()
  email: string;
  @Length(6, 12)
  @IsString()
  password: string;
}
