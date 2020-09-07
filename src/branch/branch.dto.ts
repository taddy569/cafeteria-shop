import { IsNotEmpty } from "class-validator";

export class BranchDTO {
  name: string;
  address: string;
  phone: string;

  @IsNotEmpty()
  cafeteria_id: number;
}
