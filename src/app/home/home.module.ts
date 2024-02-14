import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';
import { PdfopenerComponent } from './pdfopener/pdfopener.component';
import { SnippetsModule } from '../snippets/snippets.module';
import { SnippetsComponent } from '../snippets/snippets.component';

@NgModule({
  declarations: [
    HomeComponent,
    TimerComponent,
    PdfopenerComponent,
  ],
  imports: [
    CommonModule,
    SnippetsModule
  ]
})
export class HomeModule { }
