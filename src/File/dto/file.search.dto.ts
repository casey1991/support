import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class FileSearchDto {
  @ApiModelProperty()
  @IsString()
  _id: string;
}
