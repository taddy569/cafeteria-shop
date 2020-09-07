import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";

import { Branch } from "./branch.model";
import { BranchController } from "./branch.controller";
import { BranchService } from "./branch.service";

@Module({
  imports: [SequelizeModule.forFeature([Branch])],
  controllers: [BranchController],
  providers: [BranchService],
})
export class BranchModule {}
