import { TestBed } from '@angular/core/testing';

import { FashionsService } from './fashions.service';

describe('FashionsService', () => {
  let service: FashionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
