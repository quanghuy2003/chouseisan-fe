import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindAllEventComponent} from "./compoment/find-all-event/find-all-event.component";
import {AddComponent} from "./compoment/addEvent/add.component";
import {UpdateComponent} from "./compoment/updateEvent/update.component";
import {FindVoteComponent} from "./compoment/find-vote/find-vote.component";
import {AddVoteComponent} from "./compoment/add-vote/add-vote.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {
    path:'findEvent',
    component: FindAllEventComponent
  },{
    path:'addEvent',
    component: AddComponent
  },{
    path:'editEvent/:id',
    component: UpdateComponent
  },{
    path:'findVote',
    component: FindVoteComponent
  },{
    path:'addVote/:id',
    component: AddVoteComponent
  },{
    path:'detail',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
