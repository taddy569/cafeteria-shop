import { IsNotEmpty } from "class-validator";

export class StaffDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  name: string;

  @IsNotEmpty()
  role_id: number;

  @IsNotEmpty()
  branch_id: number;
}
