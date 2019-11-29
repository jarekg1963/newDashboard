import { TestBed } from '@angular/core/testing';

import { MyTestserviceService } from './my-testservice.service';

describe('MyTestserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyTestserviceService = TestBed.get(MyTestserviceService);
    expect(service).toBeTruthy();
  });
});
