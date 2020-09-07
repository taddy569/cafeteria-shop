import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Staff } from "./staff.model";
import { StaffController } from "./staff.controller";
import { StaffService } from "./staff.service";

@Module({
  imports: [SequelizeModule.forFeature([Staff])],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule {}
