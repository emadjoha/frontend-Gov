import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalManagerComponent } from './approval-manager.component';

describe('ApprovalManagerComponent', () => {
  let component: ApprovalManagerComponent;
  let fixture: ComponentFixture<ApprovalManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
