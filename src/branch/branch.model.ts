import {
  Column,
  Model,
  Table,
  HasMany,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import { Cafeteria } from "src/cafeteria/cafeteria.model";

@Table
export class Branch extends Model<Branch> {
  @Column
  name: string;

  @Column
  address: string;

  @Column
  phone: string;

  @Column
  @ForeignKey(() => Cafeteria)
  cafeteria_id: number;

}
