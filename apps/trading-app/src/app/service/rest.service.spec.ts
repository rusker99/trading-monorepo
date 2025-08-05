import { TestBed } from '@angular/core/testing';

import { ModelRestService } from './model-rest.service';

describe('RestService', () => {
  let service: ModelRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
