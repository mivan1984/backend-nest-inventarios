import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DominiosService } from './dominios.service';
import { CreateDominioDto } from './dto/create-dominio.dto';
import { UpdateDominioDto } from './dto/update-dominio.dto';

@Controller('dominios')
export class DominiosController {
  constructor(private readonly dominiosService: DominiosService) {}

  @Post()
  create(@Body() createDominioDto: CreateDominioDto) {
    return this.dominiosService.create(createDominioDto);
  }

  @Get()
  findAll() {
    return this.dominiosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dominiosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDominioDto: UpdateDominioDto) {
    return this.dominiosService.update(+id, updateDominioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dominiosService.remove(+id);
  }
}
