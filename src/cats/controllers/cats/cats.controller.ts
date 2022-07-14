// eslint-disable-next-line prettier/prettier
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CatsService } from 'src/cats/services/cats/cats.service';
import { Cat, CreateCat, UpdateCat } from '../../interfaces/cat.interfaces';

@Controller('cats')
export class CatsController {
  catService = new CatsService();

  @Get(':id')
  find(@Param('id') id: string): Cat {
    return this.catService.find(parseFloat(id));
  }

  @Get()
  findAll() {
    return this.catService.findAll();
  }

  @Post()
  create(@Body() createCat: CreateCat): Cat[] {
    this.catService.create(createCat);
    return this.catService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCat: UpdateCat): Cat {
    return this.catService.update(parseFloat(id), updateCat);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.catService.delete(parseFloat(id));
  }
}
