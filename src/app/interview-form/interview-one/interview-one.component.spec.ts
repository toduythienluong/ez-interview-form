import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewOneComponent } from './interview-one.component';

describe('InterviewOneComponent', () => {
  let component: InterviewOneComponent;
  let fixture: ComponentFixture<InterviewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
