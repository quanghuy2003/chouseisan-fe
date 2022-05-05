import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindAllEventComponent} from "./compoment/find-all-event/find-all-event.component";
import {AddComponent} from "./compoment/addEvent/add.component";
import {UpdateComponent} from "./compoment/updateEvent/update.component";
import {FindVoteComponent} from "./compoment/find-vote/find-vote.component";

const routes: Routes = [
  {
    path:'findEvent',
    component: FindAllEventComponent
  },{
    path:'addEvent',
    component: AddComponent
  },{
    path:'editEvent',
    component: UpdateComponent
  },{
    path:'findVote',
    component: FindVoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
