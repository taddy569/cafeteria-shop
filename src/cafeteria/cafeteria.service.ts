import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize, Op } from 'sequelize';

import { Cafeteria } from './cafeteria.model';
import { CafeteriaDTO } from './cafeteria.dto';

@Injectable()
export class CafeteriaService {
  constructor(
    @InjectModel(Cafeteria)
    private cafeteriaModel: typeof Cafeteria,
  ) {}

  async createNew(request: CafeteriaDTO): Promise<Cafeteria> {
    const cafeteria = this.cafeteriaModel.create(request);
    return cafeteria;
  }

  async edit(request: any): Promise<any> {
    const { id, name } = request
    const cafeteriaRecord = this.cafeteriaModel.update(
      { name },
      { where: { id } }
    );
    return cafeteriaRecord;
  }

  async remove(id: number): Promise<void> {
    const deletedCafeteria = this.cafeteriaModel.destroy({
      where: {
        id,
      }
    });
  }

  async getAnItem(id: number): Promise<Cafeteria> {
    const cafeteria = this.cafeteriaModel.findOne({
      where: {
        id,
      }
    });
    return cafeteria;
  }

  async getAll(): Promise<Cafeteria[]> {
    const cafeteria = this.cafeteriaModel.findAll();
    return cafeteria
  }
}