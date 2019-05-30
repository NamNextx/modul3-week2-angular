import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucDirectiveComponent } from './struc-directive.component';

describe('StrucDirectiveComponent', () => {
  let component: StrucDirectiveComponent;
  let fixture: ComponentFixture<StrucDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrucDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrucDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
