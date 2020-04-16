import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayblogComponent } from './displayblog/displayblog.component';
import { FormcreateComponent } from './formcreate/formcreate.component';

const routes: Routes = [
  {path:"form",component:FormcreateComponent},
 // {path:"form",component:FormcreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 