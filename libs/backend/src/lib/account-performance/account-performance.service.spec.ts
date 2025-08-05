import { Test, TestingModule } from '@nestjs/testing';
import { AccountPerformanceService } from './account-performance.service';

describe('AccountPerformanceService', () => {
  let service: AccountPerformanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountPerformanceService],
    }).compile();

    service = module.get<AccountPerformanceService>(AccountPerformanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
