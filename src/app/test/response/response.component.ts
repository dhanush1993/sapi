import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements AfterViewInit {

  @Input() response: Observable<string>
  @ViewChild('viewer',{static: false}) viewer: ElementRef
  jsonResponse: string
  constructor() {
    this.jsonResponse = ''
   }

  ngAfterViewInit() {
    this.response.subscribe(ele=>{
      this.jsonResponse = ele
    })
  }

}
