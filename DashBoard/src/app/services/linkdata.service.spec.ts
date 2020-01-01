import { TestBed } from '@angular/core/testing';

import { LinkdataService } from './linkdata.service';

describe('LinkdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkdataService = TestBed.get(LinkdataService);
    expect(service).toBeTruthy();
  });
});
