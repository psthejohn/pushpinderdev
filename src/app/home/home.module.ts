import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';
import { PdfopenerComponent } from './pdfopener/pdfopener.component';

@NgModule({
  declarations: [
    HomeComponent,
    TimerComponent,
    PdfopenerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
