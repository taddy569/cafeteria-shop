import {
  Column,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';

import { Branch } from '../branch/branch.model';

@Table({
  timestamps: true,
  underscored: true,
  tableName: 'drink'
})
export class Drink extends Model<Drink> {
  @Column
  name: string;

  @Column
  is_acoholic_drink: boolean;

  @Column
  price: number;

  @Column
  @ForeignKey(() => Branch)
  branch_id: number;
}