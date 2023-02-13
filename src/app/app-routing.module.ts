import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { Home1Component } from './pages/home1/home1.component'
import { Home2Component } from './pages/home2/home2.component'

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"1",component:Home1Component},
  {path:"2",component:Home2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
