import {
  Column,
  Model,
  Table,
  ForeignKey,
} from "sequelize-typescript";

import { Branch } from "../branch/branch.model";

@Table({
  timestamps: true,
  underscored: true,
  tableName: 'table'
}
)
export class Table1 extends Model<Table1> {
  @Column
  table_number: number;

  @ForeignKey(() => Branch)
  @Column
  branch_id: number;  
}