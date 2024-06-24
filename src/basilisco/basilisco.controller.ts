import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BasiliscoService } from './basilisco.service';
import { CreateBasiliscoDto } from './dto/create-basilisco.dto';
import { UpdateBasiliscoDto } from './dto/update-basilisco.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('basilisco')
@ApiTags('creature')
export class BasiliscoController {
  constructor(private readonly basiliscoService: BasiliscoService) {}

  @Post()
  create(@Body() createBasiliscoDto: CreateBasiliscoDto) {
    return this.basiliscoService.create(createBasiliscoDto);
  }

  @Get('extinct')
  findAllExtinct() {
    return this.basiliscoService.findAllExtinct();
  }

  @Get()
  findAll() {
    return this.basiliscoService.findAllAlive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basiliscoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasiliscoDto: UpdateBasiliscoDto) {
    return this.basiliscoService.update(+id, updateBasiliscoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basiliscoService.remove(+id);
  }
}
