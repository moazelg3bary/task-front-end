import { TestBed } from '@angular/core/testing';

import { InfoUserGuard } from './info-user.guard';

describe('InfoUserGuard', () => {
  let guard: InfoUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InfoUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
