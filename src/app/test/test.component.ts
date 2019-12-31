import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'projects/sapi/src/lib/spotify.service';
import { AudioAnalysis } from 'projects/sapi/src/lib/models/audio-analysis/audio-analysis';
import { ServiceModel } from './service-model/service-model.module';
import { Track } from 'projects/sapi/src/lib/models/track/track';
import { User } from 'projects/sapi/src/lib/models/user/user';
import { BehaviorSubject } from 'rxjs';
import { SavedAlbum } from 'projects/sapi/src/lib/models/saved-album/saved-album';
import { Paging } from 'projects/sapi/src/lib/models/paging/paging';
import { SavedTrack } from 'projects/sapi/src/lib/models/saved-track/saved-track';
import { Artist } from 'projects/sapi/src/lib/models/artist/artist'
import { Device } from 'projects/sapi/src/lib/models/device/device';
import { Context } from 'projects/sapi/src/lib/models/context/context';
import { PlayHistory } from 'projects/sapi/src/lib/models/play-history/play-history';
import { CurrentlyPlaying } from 'projects/sapi/src/lib/models/currently-playing/currently-playing';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  service$: BehaviorSubject<ServiceModel>

  constructor(private spotify: SpotifyService) { }
  
  ngOnInit() {
    this.service$ = new BehaviorSubject<ServiceModel>(new ServiceModel('None', [], false))
    this.spotify.getRecentlyPlayed().then((res:Paging<PlayHistory>)=>{
      console.log(res)
    })
  }

  updateService(service: ServiceModel){
    this.service$.next(service)
  }



}
