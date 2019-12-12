import { TestBed } from '@angular/core/testing';

import { GlobalmessangerService } from './globalmessanger.service';

describe('GlobalmessangerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalmessangerService = TestBed.get(GlobalmessangerService);
    expect(service).toBeTruthy();
  });
});
