import { Test, TestingModule } from '@nestjs/testing';
import { DominiosController } from './dominios.controller';
import { DominiosService } from './dominios.service';

describe('DominiosController', () => {
  let controller: DominiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DominiosController],
      providers: [DominiosService],
    }).compile();

    controller = module.get<DominiosController>(DominiosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
