import { TestBed } from '@angular/core/testing';

import { DerogationServicesService } from './derogation-services.service';

describe('DerogationServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DerogationServicesService = TestBed.get(DerogationServicesService);
    expect(service).toBeTruthy();
  });
});
