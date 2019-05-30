import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUseComponent } from './service-use.component';

describe('ServiceUseComponent', () => {
  let component: ServiceUseComponent;
  let fixture: ComponentFixture<ServiceUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
