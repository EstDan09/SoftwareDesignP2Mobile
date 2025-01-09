import { TestBed } from '@angular/core/testing';

import { fire-base-cnxService } from './fire-base-cnx.service';

describe('fire-base-cnxService', () => {
  let service: fire-base-cnxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(fire-base-cnxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
