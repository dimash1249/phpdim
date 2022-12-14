import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewUserComponent } from './new-user/new-user.component';
import {EditUserComponent} from "./edit-user/edit-user.component";

const routes: Routes = [
  {
    path: 'add', component: NewUserComponent
  },
  {
    path: 'edit/:userId', component: EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
