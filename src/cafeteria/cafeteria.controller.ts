import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CafeteriaDTO } from "./cafeteria.dto";
import { CafeteriaService } from "./cafeteria.service";

@Controller('cafeteria')
export class CafeteriaController {
  constructor(private cafeteriaService: CafeteriaService) {}

  @Get()
  getAllCafeteria() {
    return this.cafeteriaService.getAll()
  }

  @Get(':id')
  getOneCafeteria(@Param() param) {
    return this.cafeteriaService.getAnItem(param.id)
  }

  @Post()
  createNewCafeteria(@Body() request: CafeteriaDTO) {
    return this.cafeteriaService.createNew(request)
  }

  @Put(':id')
  editCafeteria(
    @Body() updateItem: any,
    @Param('id') id
  ): Promise<any> {
    console.log(`CAFETERIA_CONTROLLER: ${JSON.stringify(updateItem)}`);
    return this.cafeteriaService.edit({
      id,
      name: updateItem.name,
    });
  }

  @Delete(':id')
  deleteCafeteria(@Param('id') id: number): Promise<void> {
    return this.cafeteriaService.remove(id);
  }
}