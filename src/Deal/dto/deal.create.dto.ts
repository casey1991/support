import { IsEmail, IsString, Length } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class DealCreateDto {
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
