import { TestBed } from '@angular/core/testing';

import { ModelIoService } from './model-io.service';

describe('ModelIoService', () => {
  let service: ModelIoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelIoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
