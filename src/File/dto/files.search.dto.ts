import { IsArray, IsNumber, IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class FilesSearchDto {
  @ApiModelProperty({ required: true })
  @IsArray()
  _ids: object;
  @ApiModelProperty({ required: false })
  @IsOptional()
  @IsNumber()
  limit: number;
  @ApiModelProperty({ required: false })
  @IsOptional()
  @IsNumber()
  offset: number;
}
