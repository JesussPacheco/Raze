import { TestBed } from '@angular/core/testing';

import { OutfitTypesService } from './outfit-types.service';

describe('OutfitTypesService', () => {
  let service: OutfitTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutfitTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
