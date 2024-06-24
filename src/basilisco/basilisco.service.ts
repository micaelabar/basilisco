import { Injectable } from '@nestjs/common';
import { CreateBasiliscoDto } from './dto/create-basilisco.dto';
import { UpdateBasiliscoDto } from './dto/update-basilisco.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BasiliscoService {
  constructor(private prisma: PrismaService) {}
  create(createBasiliscoDto: CreateBasiliscoDto) {
    return 'This action adds a new basilisco';
  }

  findAllAlive() {
    return this.prisma.basilisco.findMany({ 
      where: { extinct: false },
    });
  }

  findAllExtinct() {
    return this.prisma.basilisco.findMany({ 
      where: { extinct: true },
    });
  } 

  findOne(id: number) {
    return this.prisma.basilisco.findUnique({ 
      where: { id },
    });
  }

  update(id: number, updateBasiliscoDto: UpdateBasiliscoDto) {
    return this.prisma.basilisco.update({ 
    where: { id },
  data: updateBasiliscoDto,
 });
  }

  remove(id: number) {
    return this.prisma.basilisco.delete ({ 
      where: { id },
    });
  }
}
