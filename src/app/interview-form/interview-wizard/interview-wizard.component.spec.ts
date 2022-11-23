import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewWizardComponent } from './interview-wizard.component';

describe('InterviewWizardComponent', () => {
  let component: InterviewWizardComponent;
  let fixture: ComponentFixture<InterviewWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
