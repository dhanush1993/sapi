import { TestBed } from '@angular/core/testing';

import { SpotifyAuthService } from './spotify-auth.service';

describe('SpotifyAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyAuthService = TestBed.get(SpotifyAuthService);
    expect(service).toBeTruthy();
  });
});
