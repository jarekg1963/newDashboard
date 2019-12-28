import { TestBed } from '@angular/core/testing';

import { CommonfuncionsService } from './commonfuncions.service';

describe('CommonfuncionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonfuncionsService = TestBed.get(CommonfuncionsService);
    expect(service).toBeTruthy();
  });
});
