import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SnippetsModule } from './snippets/snippets.module';
import { HeaderComponent } from './header/header.component';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    SnippetsModule,
    AppRoutingModule,
    RouterModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
