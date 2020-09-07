import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CafeteriaModule } from './cafeteria/cafeteria.module';
import { BranchModule } from './branch/branch.module';
import { RoleModule } from './role/role.module';
import { StaffModule } from './staff/staff.module';
import { TableModule } from './table/table.module';
import { DrinkModule } from './drink/drink.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 4321,
      username: 'cafeteria',
      password: '123456',
      database: 'cafeteria',
      autoLoadModels: true,
      synchronize: true,
    }),
    CafeteriaModule,
    BranchModule,
    RoleModule,
    StaffModule,
    TableModule,
    DrinkModule,
    OrderModule,
    OrderDetailModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
