import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanPipesComponent } from './lean-pipes.component';

describe('LeanPipesComponent', () => {
  let component: LeanPipesComponent;
  let fixture: ComponentFixture<LeanPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeanPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
