import { logging } from 'protractor';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestoComponent }from './add-resto/add-resto.component';
import {ListRestoComponent} from "./list-resto/list-resto.component";
import {LoginComponent} from './login/login.component' ;
import {UpdateRestoComponent} from './update-resto/update-resto.component' ;
import {RegisterComponent} from './register/register.component';


import { from } from 'rxjs';
const routes: Routes = [
{
  component:AddRestoComponent, 
  path:'add'
},
{
  component:LoginComponent, 
  path:'login'
},
{
  component:UpdateRestoComponent, 
  path:'update/:id'
},
{
  component:UpdateRestoComponent, 
  path:'update'
},
{
  component:RegisterComponent, 
  path:'register'
},
{
  component:ListRestoComponent, 
  path:''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
