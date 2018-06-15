import { IsEmail, IsString, Length } from 'class-validator';
export class SignUpDto {
  @IsString() name: string;
  @IsEmail() email: string;
  @Length(6, 12)
  @IsString()
  password: string;
}
