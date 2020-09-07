import {
  Column,
  Model,
  Table,
} from "sequelize-typescript";

import { Branch } from "../branch/branch.model";

@Table
export class Cafeteria extends Model<Cafeteria> {
  @Column
  name: string;
}
