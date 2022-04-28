import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindAllEventComponent} from "./find-all-event/find-all-event.component";
import {AddComponent} from "./add/add.component";

const routes: Routes = [
  {
    path:'find',
    component: FindAllEventComponent
  },{
    path:'add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
