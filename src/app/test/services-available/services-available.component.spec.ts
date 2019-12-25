import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAvailableComponent } from './services-available.component';

describe('ServicesAvailableComponent', () => {
  let component: ServicesAvailableComponent;
  let fixture: ComponentFixture<ServicesAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
