import { TestBed } from '@angular/core/testing';

import { ManageDimensionsServicesService } from './manage-dimensions-services.service';

describe('ManageDimensionsServicesService', () => {
  let service: ManageDimensionsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageDimensionsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
