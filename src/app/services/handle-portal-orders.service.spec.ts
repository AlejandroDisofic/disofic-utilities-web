import { TestBed } from '@angular/core/testing';

import { HandlePortalOrdersService } from './handle-portal-orders.service';

describe('HandlePortalOrdersService', () => {
  let service: HandlePortalOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlePortalOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
