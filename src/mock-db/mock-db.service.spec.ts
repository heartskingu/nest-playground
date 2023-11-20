import { Test, TestingModule } from '@nestjs/testing';
import { MockDbService } from './mock-db.service';

describe('MockDbService', () => {
  let service: MockDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockDbService],
    }).compile();

    service = module.get<MockDbService>(MockDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
