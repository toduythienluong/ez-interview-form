import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewTwoComponent } from './interview-two.component';

describe('InterviewTwoComponent', () => {
  let component: InterviewTwoComponent;
  let fixture: ComponentFixture<InterviewTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
