import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './tax-form/landing-page/landing-page.component';
import { PersonalInformationComponent } from './tax-form/personal-information/personal-information.component';
import { IncomeComponent } from './tax-form/income/income.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
