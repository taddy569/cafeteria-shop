import {
  Column,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';

import { Table1 } from '../table/table.model';
import { Staff } from 'src/staff/staff.model';

@Table({
  timestamps: true,
  underscored: true,
  tableName: 'order'
})
export class Order extends Model<Order> {
  @Column
  @ForeignKey(() => Table1)
  table_id: number;

  @Column
  @ForeignKey(() => Staff)
  staff_id: number;
}