import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize, Op } from 'sequelize';

import { Role } from "./role.model";
import { RoleDTO } from "./role.dto";

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role)
    private roleModel: typeof Role,
  ) {}

  async createNew(request: RoleDTO): Promise<Role> {
    const createNewRole = this.roleModel.create(request);
    return createNewRole;
  }
}