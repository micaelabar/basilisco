import { Test, TestingModule } from '@nestjs/testing';
import { BasiliscoController } from './basilisco.controller';
import { BasiliscoService } from './basilisco.service';

describe('BasiliscoController', () => {
  let controller: BasiliscoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasiliscoController],
      providers: [BasiliscoService],
    }).compile();

    controller = module.get<BasiliscoController>(BasiliscoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
