import { Module } from '@nestjs/common';
import { BasiliscoService } from './basilisco.service';
import { BasiliscoController } from './basilisco.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BasiliscoController],
  providers: [BasiliscoService],
  imports: [PrismaModule],
})
export class BasiliscoModule {}
