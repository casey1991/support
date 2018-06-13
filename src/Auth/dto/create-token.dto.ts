import { IsEmail, IsString } from 'class-validator';
export class CreateTokenDto {
  @IsEmail() email: string;
  @IsString() password: string;
}
