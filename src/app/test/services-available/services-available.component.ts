import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms'
import { SpotifyService } from 'projects/sapi/src/lib/spotify.service';
import {map, startWith, share, take, finalize} from 'rxjs/operators';
import {combineLatest, Observable, of, BehaviorSubject} from 'rxjs';
import { ServiceModel } from '../service-model/service-model.module';

@Component({
  selector: 'app-services-available',
  templateUrl: './services-available.component.html',
  styleUrls: ['./services-available.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesAvailableComponent implements OnInit {
  filteredServices$: Observable<ServiceModel[]>
  filter: FormControl;
  filter$: Observable<string>
  services: ServiceModel[]
  services$: Observable<ServiceModel[]>
  currentService: ServiceModel
  @Output() selectedService: EventEmitter<ServiceModel> = new EventEmitter<ServiceModel>();
  constructor(private spotify: SpotifyService, private ref: ChangeDetectorRef) {
    this.services = []
    let self = this
    let isActive = true
    this.getAllFuncs(this.spotify).forEach(ele=>{
      const service = new ServiceModel(ele, self.getArgs(ele, self.spotify[ele]), isActive)
      self.services.push(service)
      if(isActive){
        self.currentService = service
        self.selectedService.emit(service)
      }
      isActive = false
    })
    this.services$ = of(this.services);
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredServices$ = combineLatest(this.services$, this.filter$).pipe(
      map(([services, filterString]) => services.filter(service => service.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
    
    
   }

  ngOnInit() {
    
    
    
  }

  getAllFuncs(obj: any) {
    var props = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));

    return props.sort().filter(function(e, i, arr) { 
       if (e!=arr[i+1] && typeof obj[e] == 'function') return true;
    });
  }

  getArgs(name: string, func: any) {
    var pattern = new RegExp(name+'\s*\(([^)]*)\)')
    var args = func.toString().match(pattern)[1];
    return args.split(',').map(function(arg) {
      return arg.replace(/\/\*.*\*\//, '').replace(/\(/, '').trim();
    }).filter(function(arg) {
      return arg;
    });
  }

  update(service: ServiceModel){
    this.currentService.isActive=false
    this.currentService = service
    this.currentService.isActive = true
    this.selectedService.emit(service)
    
  }

}
