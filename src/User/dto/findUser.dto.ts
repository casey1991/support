import { IsOptional, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class FindUserDto {
  @ApiModelProperty({ required: false })
  @IsOptional()
  @IsString()
  userId: string;
}
