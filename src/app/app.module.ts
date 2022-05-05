import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './compoment/addEvent/add.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { FindAllEventComponent } from './compoment/find-all-event/find-all-event.component';
import { UpdateComponent } from './compoment/updateEvent/update.component';
import { FindVoteComponent } from './compoment/find-vote/find-vote.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    FindAllEventComponent,
    UpdateComponent,
    FindVoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
