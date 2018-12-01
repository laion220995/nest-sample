import { Test, TestingModule } from '@nestjs/testing';
import { OffersController } from './offers.controller';

describe('Offers Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [OffersController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: OffersController = module.get<OffersController>(OffersController);
    expect(controller).toBeDefined();
  });
});
