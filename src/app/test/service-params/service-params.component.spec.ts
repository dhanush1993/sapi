import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceParamsComponent } from './service-params.component';

describe('ServiceParamsComponent', () => {
  let component: ServiceParamsComponent;
  let fixture: ComponentFixture<ServiceParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
