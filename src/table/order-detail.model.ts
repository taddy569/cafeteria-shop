import {
  Column,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  timestamps: true,
  underscored: true,
  tableName: 'order_detail'
})
export class OrderDetail extends Model<OrderDetail> {
  @Column
  name: string;

}