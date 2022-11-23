import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from "./layout/layout.module";
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "./material/material.module";
import { MatDividerModule } from '@angular/material/divider';
import { TaxFormModule } from "./tax-form/tax-form.module";
import { InterviewFormModule } from "./interview-form/interview-form.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDividerModule,
    TaxFormModule,
    InterviewFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
