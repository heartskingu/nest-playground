import { Test, TestingModule } from '@nestjs/testing';
import { GemApiController } from './gem-api.controller';

describe('GemApiController', () => {
  let controller: GemApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GemApiController],
    }).compile();

    controller = module.get<GemApiController>(GemApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
