import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { BranchDTO } from "./branch.dto";
import { BranchService } from "./branch.service";

@Controller('branch')
export class BranchController {
  constructor(private branchService: BranchService) {}

  @Post()
  createNewBranch(@Body() request: BranchDTO) {
    return this.branchService.createNew(request)
  }

}