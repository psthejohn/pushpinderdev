import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SnippetsModule } from './snippets/snippets.module';
import { HeaderComponent } from './header/header.component';
import { ProjectsModule } from './projects/projects.module';
import { CertificateComponent } from './testimonials/certificate/certificate.component';
import { BoxComponent } from './testimonials/certificate/box/box.component';
import { GhostPacmanComponent } from './snippets/ghost-pacman/ghost-pacman.component';
import { ContactComponent } from './testimonials/contact/contact.component';
import { AppreaciationsComponent } from './testimonials/appreaciations/appreaciations.component';
import { AwardsComponent } from './testimonials/awards/awards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CertificateComponent,
    BoxComponent,
    AppreaciationsComponent,
    AwardsComponent,
  ],
  imports: [
    HomeModule,
    BrowserModule,
    SnippetsModule,
    AppRoutingModule,
    RouterModule,
    ProjectsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
