import { IsNotEmpty } from "class-validator";

export class Employer {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  location: string;
}
