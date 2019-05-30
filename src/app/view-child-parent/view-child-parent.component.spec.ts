import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildParentComponent } from './view-child-parent.component';

describe('ViewChildParentComponent', () => {
  let component: ViewChildParentComponent;
  let fixture: ComponentFixture<ViewChildParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
