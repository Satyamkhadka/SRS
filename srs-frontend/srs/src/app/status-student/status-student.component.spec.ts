import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusStudentComponent } from './status-student.component';

describe('StatusStudentComponent', () => {
  let component: StatusStudentComponent;
  let fixture: ComponentFixture<StatusStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
