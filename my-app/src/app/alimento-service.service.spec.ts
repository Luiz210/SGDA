import { TestBed } from '@angular/core/testing';

import { AlimentoServiceService } from './service/alimento-service.service';

describe('AlimentoServiceService', () => {
  let service: AlimentoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimentoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
