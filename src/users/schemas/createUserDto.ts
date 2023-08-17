import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumberString()
  age: number;

  location?: string;
}
