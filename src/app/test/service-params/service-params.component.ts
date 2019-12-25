import { Component, OnInit, Input } from '@angular/core';
import { ServiceModel } from '../service-model/service-model.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-params',
  templateUrl: './service-params.component.html',
  styleUrls: ['./service-params.component.css']
})
export class ServiceParamsComponent implements OnInit {

  constructor() { }
  service: ServiceModel 
  @Input() serviceObservable: Observable<ServiceModel>
  ngOnInit() {
    this.serviceObservable.subscribe((service)=>{
      this.service = service
    })
  }

}
