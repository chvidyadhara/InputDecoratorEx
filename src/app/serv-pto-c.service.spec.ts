import { TestBed } from '@angular/core/testing';

import { ServPtoCService } from './serv-pto-c.service';

describe('ServPtoCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServPtoCService = TestBed.get(ServPtoCService);
    expect(service).toBeTruthy();
  });
});
