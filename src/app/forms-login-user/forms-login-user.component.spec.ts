import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLoginUserComponent } from './forms-login-user.component';

describe('FormsLoginUserComponent', () => {
  let component: FormsLoginUserComponent;
  let fixture: ComponentFixture<FormsLoginUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsLoginUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
