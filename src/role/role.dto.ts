import { IsNotEmpty } from "class-validator";

export class RoleDTO {
  @IsNotEmpty()
  title: string;
}
