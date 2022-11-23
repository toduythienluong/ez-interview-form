import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './tax-form/landing-page/landing-page.component';
import { PersonalInformationComponent } from './tax-form/personal-information/personal-information.component';
import { IncomeComponent } from './tax-form/income/income.component';
import { InterviewWizardComponent } from "./interview-form/interview-wizard/interview-wizard.component";
import { InterviewOneComponent } from "./interview-form/interview-one/interview-one.component";
import { InterviewTwoComponent } from "./interview-form/interview-two/interview-two.component";
import { InterviewThreeComponent } from "./interview-form/interview-three/interview-three.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'interview', component: InterviewWizardComponent },
  { path: 'interview-one', component: InterviewOneComponent },
  { path: 'interview-two', component: InterviewTwoComponent },
  { path: 'interview-three', component: InterviewThreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
