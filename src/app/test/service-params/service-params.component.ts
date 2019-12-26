import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceModel } from '../service-model/service-model.module';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { SpotifyService } from 'projects/sapi/src/public-api';

@Component({
  selector: 'app-service-params',
  templateUrl: './service-params.component.html',
  styleUrls: ['./service-params.component.css']
})
export class ServiceParamsComponent implements OnInit {

  service: ServiceModel 
  params: {}
  @Input() serviceObservable: Observable<ServiceModel>
  @Output() jsonResponse: EventEmitter<any>
  constructor(private spotify: SpotifyService) {
    this.params = {}
    this.jsonResponse = new EventEmitter<any>()
   }
  
  ngOnInit() {
    
    this.serviceObservable.subscribe((service)=>{
      this.params = {}
      let params = this.params
      service.params.forEach(x => {
        params[x] = new FormControl()
      })
      this.service = service
    })
  }

  apiCall(){
    let params = []
    for(let param in this.params){
      params.push(this.params[param].value)
    }
    const response = this.jsonResponse
    this.spotify[this.service.name].apply(this.spotify, params).then(ele=>{
      response.emit(JSON.stringify(ele, null, 4))
    }).catch(err=>{
      response.emit(JSON.stringify(err, null, 4))
    })

    
    
  }

}
