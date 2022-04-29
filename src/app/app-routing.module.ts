import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindAllEventComponent} from "./compoment/find-all-event/find-all-event.component";
import {AddComponent} from "./compoment/add/add.component";
import {UpdateComponent} from "./compoment/update/update.component";

const routes: Routes = [
  {
    path:'find',
    component: FindAllEventComponent
  },{
    path:'add',
    component: AddComponent
  },{
    path:'edit',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
