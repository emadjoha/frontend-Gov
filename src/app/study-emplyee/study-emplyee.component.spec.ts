import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyEmplyeeComponent } from './study-emplyee.component';

describe('StudyEmplyeeComponent', () => {
  let component: StudyEmplyeeComponent;
  let fixture: ComponentFixture<StudyEmplyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyEmplyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyEmplyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
