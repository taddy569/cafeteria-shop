import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';

import { StaffDTO } from "./staff.dto";
import { StaffService } from "./staff.service";

@Controller('staff')
export class StaffController {
  constructor(private staffService: StaffService) {}

  @Post()
  createNewStaff(@Body() request: StaffDTO) {
    return this.staffService.createNew(request)
  }
}
