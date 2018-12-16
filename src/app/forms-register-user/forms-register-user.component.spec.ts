import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRegisterUSerComponent } from './forms-register-user.component';

describe('FormsRegisterUSerComponent', () => {
  let component: FormsRegisterUSerComponent;
  let fixture: ComponentFixture<FormsRegisterUSerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsRegisterUSerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsRegisterUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
