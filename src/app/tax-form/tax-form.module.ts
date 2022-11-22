import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './income/income.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from "../material/material.module";
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [
    IncomeComponent,
    PersonalInformationComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MaterialModule,
    MatDividerModule
  ],
  exports: [
    IncomeComponent,
    PersonalInformationComponent,
    LandingPageComponent,
    MatButtonModule
  ]
})
export class TaxFormModule { }
