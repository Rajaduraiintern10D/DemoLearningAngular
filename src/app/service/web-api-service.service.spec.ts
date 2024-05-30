import { TestBed } from '@angular/core/testing';

import { WebApiServiceService } from './web-api-service.service';

describe('WebApiServiceService', () => {
  let service: WebApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
