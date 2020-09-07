import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize, Op } from 'sequelize';

import { Staff } from "./staff.model";
import { StaffDTO } from "./staff.dto";

@Injectable()
export class StaffService {
  constructor(
    @InjectModel(Staff)
    private staffModel: typeof Staff,
  ) {}

  async createNew(request: StaffDTO): Promise<Staff> {
    const createNewStaff = this.staffModel.create(request);
    return createNewStaff;
  }
}
