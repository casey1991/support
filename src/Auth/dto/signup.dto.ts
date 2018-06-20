import { IsEmail, IsString, Length } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class SignUpDto {
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
