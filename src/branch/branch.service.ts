import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize, Op } from 'sequelize';

import { Branch } from "./branch.model"
import { BranchDTO } from "./branch.dto";

@Injectable()
export class BranchService {
  constructor(
    @InjectModel(Branch)
    private branchModel: typeof Branch,
  ) {}

  async createNew(request: BranchDTO): Promise<Branch> {
    const createNewBranch = this.branchModel.create(request);
    return createNewBranch;
  }
} 