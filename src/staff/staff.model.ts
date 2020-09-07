import {
  Column,
  Model,
  Table,
  ForeignKey,
} from "sequelize-typescript";

import { Branch } from "../branch/branch.model";
import { Role } from "../role/role.model";

@Table
export class Staff extends Model<Staff> {
  @Column
  username: string;

  @Column
  password: string;

  @Column
  name: string;

  @ForeignKey(() => Role)
  @Column
  role_id: number;
  
  @ForeignKey(() => Branch)
  @Column
  branch_id: number;
}