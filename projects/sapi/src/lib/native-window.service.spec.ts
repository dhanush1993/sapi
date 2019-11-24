import { TestBed } from '@angular/core/testing';

import { NativeWindowService } from './native-window.service';

describe('NativeWindowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NativeWindowService = TestBed.get(NativeWindowService);
    expect(service).toBeTruthy();
  });
});
