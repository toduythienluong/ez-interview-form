import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './income/income.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    IncomeComponent,
    PersonalInformationComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IncomeComponent,
    PersonalInformationComponent,
    LandingPageComponent
  ]
})
export class TaxFormModule { }
