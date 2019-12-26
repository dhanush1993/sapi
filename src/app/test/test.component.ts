import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'projects/sapi/src/lib/spotify.service';
import { AudioAnalysis } from 'projects/sapi/src/lib/models/audio-analysis/audio-analysis';
import { ServiceModel } from './service-model/service-model.module';
import { Track } from 'projects/sapi/src/lib/models/track/track';
import { User } from 'projects/sapi/src/lib/models/user/user';
import { BehaviorSubject } from 'rxjs';

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
    this.spotify.search('roadhouse%20blues').then((res:any)=>{
      console.log(res)
    })
  }

  updateService(service: ServiceModel){
    this.service$.next(service)
  }



}
