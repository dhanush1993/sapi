import { TestBed } from '@angular/core/testing';

import { SpotifyService } from './spotify.service';

describe('SpotifyV1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyService = TestBed.get(SpotifyService);
    expect(service).toBeTruthy();
  });
});
