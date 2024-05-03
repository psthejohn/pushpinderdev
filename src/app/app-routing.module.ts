import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SnippetsComponent } from './snippets/snippets.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
   component : HomeComponent
  },
  {
    path:'games',
    component:SnippetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
