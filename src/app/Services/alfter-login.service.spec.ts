import { TestBed } from '@angular/core/testing';

import { AlfterLoginService } from './alfter-login.service';

describe('AlfterLoginService', () => {
  let service: AlfterLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlfterLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
