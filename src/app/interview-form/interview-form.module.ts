import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { InterviewWizardComponent } from './interview-wizard/interview-wizard.component';
import { InterviewOneComponent } from './interview-one/interview-one.component';
import { InterviewTwoComponent } from './interview-two/interview-two.component';
import { InterviewThreeComponent } from './interview-three/interview-three.component';


@NgModule({
  declarations: [
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    InterviewWizardComponent,
    InterviewOneComponent,
    InterviewTwoComponent,
    InterviewThreeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    InterviewWizardComponent,
    InterviewOneComponent,
    InterviewTwoComponent,
    InterviewThreeComponent
  ]
})
export class InterviewFormModule { }
