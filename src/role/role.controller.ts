import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';

import { RoleDTO } from "./role.dto";
import { RoleService } from "./role.service";

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  createNewRole(@Body() request: RoleDTO) {
    return this.roleService.createNew(request)
  }
}