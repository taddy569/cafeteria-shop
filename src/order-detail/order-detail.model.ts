import {
  Column,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';

import { Drink } from '../drink/drink.model';
import { Order } from '../order/order.model';

@Table({
  timestamps: true,
  underscored: true,
  tableName: 'order_detail'
})
export class OrderDetail extends Model<OrderDetail> {
  @ForeignKey(() => Drink)
  @Column
  drink_id: number;

  @ForeignKey(() => Order)
  @Column
  order_id: number;

  @Column
  quantity: number;
}