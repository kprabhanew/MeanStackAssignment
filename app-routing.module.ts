import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateuserComponent } from './CreateUser/createuser.component';
const routes: Routes = [
  {path:"createuser", component: CreateuserComponent},
  {path:"**", redirectTo:"/createuser", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
