import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';
import { PdfopenerComponent } from './pdfopener/pdfopener.component';
import { SnippetsModule } from '../snippets/snippets.module';
import { SnippetsComponent } from '../snippets/snippets.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { ContactComponent } from '../testimonials/contact/contact.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    TimerComponent,
    PdfopenerComponent,
    WordCloudComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SnippetsModule,
    RouterModule
  ]
})
export class HomeModule { }
