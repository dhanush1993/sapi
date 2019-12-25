import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'projects/sapi/src/lib/spotify.service';
import { AudioAnalysis } from 'projects/sapi/src/lib/models/audio-analysis/audio-analysis';
import { ServiceModel } from './service-model/service-model.module';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }
  service: ServiceModel
  ngOnInit() {
    this.spotify.audioAnalysis('3JIxjvbbDrA9ztYlNcp3yL').then((res:AudioAnalysis)=>{
      console.log(res)
    })
  }

  updateService(service: ServiceModel){
    this.service = service
  }



}
