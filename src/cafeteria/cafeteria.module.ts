import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Cafeteria } from './cafeteria.model';
import { CafeteriaController } from "./cafeteria.controller";
import { CafeteriaService } from './cafeteria.service';

@Module({
  imports: [SequelizeModule.forFeature([Cafeteria])],
  controllers: [CafeteriaController],
  providers: [CafeteriaService],
})
export class CafeteriaModule {}
