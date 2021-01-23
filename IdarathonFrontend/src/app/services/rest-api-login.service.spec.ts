import { TestBed } from '@angular/core/testing';

import { RestApiLoginService } from './rest-api-login.service';

describe('RestApiLoginService', () => {
  let service: RestApiLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
