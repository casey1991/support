import { IsEmail, IsString, Length } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from '../../User/entities/user.entity';
export class SignUpDto extends User {
  @ApiModelProperty()
  @IsString()
  name: string;
  @ApiModelProperty()
  @IsEmail()
  email: string;
  @ApiModelProperty()
  @Length(6, 12)
  @IsString()
  password: string;
}
