import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Role } from "./role.model";
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [SequelizeModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [RoleService]
})
export class RoleModule {}
