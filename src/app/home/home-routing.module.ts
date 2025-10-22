import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';
import { CertificateComponent } from '../testimonials/certificate/certificate.component';
import { ContactComponent } from '../testimonials/contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'certificate',
    component:CertificateComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
