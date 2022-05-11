import { Component, OnInit } from '@angular/core';
import {VoteService} from "../../service/vote.service";
import {Vote} from "../../model/Vote";
import {EventtService} from "../../service/eventt.service";
import {Eventt} from "../../model/Eventt";

@Component({
  selector: 'app-vote-event',
  templateUrl: './vote-event.component.html',
  styleUrls: ['./vote-event.component.css']
})
export class VoteEventComponent implements OnInit {
  votes: Vote[]=[]
  events: Eventt[]=[]
  constructor(private voteServive: VoteService,
              private eventtService: EventtService) { }
  ngOnInit(): void {
    this.voteServive.getAllVote().subscribe(rs=>{
      this.votes=rs
      console.log(rs)
      this.eventtService.getAllEvent().subscribe(rss=>{
        // @ts-ignore
        this.events=rss
        console.log(rss)
      })
    })
  }
}
