import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsEleComponent } from './forms-ele.component';

describe('FormsEleComponent', () => {
  let component: FormsEleComponent;
  let fixture: ComponentFixture<FormsEleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsEleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
