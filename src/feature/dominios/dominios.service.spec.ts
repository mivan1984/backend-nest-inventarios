import { Test, TestingModule } from '@nestjs/testing';
import { DominiosService } from './dominios.service';

describe('DominiosService', () => {
  let service: DominiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DominiosService],
    }).compile();

    service = module.get<DominiosService>(DominiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
