import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherServiceApiComponent } from './weather-service-api.component';

describe('WeatherServiceApiComponent', () => {
  let component: WeatherServiceApiComponent;
  let fixture: ComponentFixture<WeatherServiceApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherServiceApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherServiceApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
