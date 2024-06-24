import { Test, TestingModule } from '@nestjs/testing';
import { BasiliscoService } from './basilisco.service';

describe('BasiliscoService', () => {
  let service: BasiliscoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasiliscoService],
    }).compile();

    service = module.get<BasiliscoService>(BasiliscoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
