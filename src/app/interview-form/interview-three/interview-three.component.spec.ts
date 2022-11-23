import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewThreeComponent } from './interview-three.component';

describe('InterviewThreeComponent', () => {
  let component: InterviewThreeComponent;
  let fixture: ComponentFixture<InterviewThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
