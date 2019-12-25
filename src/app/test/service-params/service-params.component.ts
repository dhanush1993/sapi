import { Component, OnInit, Input } from '@angular/core';
import { ServiceModel } from '../service-model/service-model.module';

@Component({
  selector: 'app-service-params',
  templateUrl: './service-params.component.html',
  styleUrls: ['./service-params.component.css']
})
export class ServiceParamsComponent implements OnInit {

  constructor() { }

  @Input() service: ServiceModel
  ngOnInit() {
  }

}
