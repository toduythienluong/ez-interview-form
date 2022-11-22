import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { MatListModule } from '@angular/material/list';
import { FormFooterComponent } from './form-footer/form-footer.component';
import { MaterialModule } from "../material/material.module";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    RightComponent,
    FormFooterComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    RightComponent,
    FormFooterComponent
  ]
})
export class LayoutModule { }
