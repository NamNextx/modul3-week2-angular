import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherServiceApi } from './weather-service-api';

describe('WeatherServiceApi', () => {
  let component: WeatherServiceApi;
  let fixture: ComponentFixture<WeatherServiceApi>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherServiceApi ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherServiceApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
