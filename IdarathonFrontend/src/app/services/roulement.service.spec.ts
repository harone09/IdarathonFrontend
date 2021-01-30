import { TestBed } from '@angular/core/testing';

import { RoulementService } from './roulement.service';

describe('RoulementService', () => {
  let service: RoulementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoulementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
