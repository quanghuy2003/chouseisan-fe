import { Component, OnInit } from '@angular/core';
import {VoteService} from "../service/vote.service";
import {Vote} from "../model/Vote";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
vote: Vote[] =[]
  constructor(private voteService: VoteService) { }

  ngOnInit(): void {
  this.voteService.getAllVoteEvent().subscribe(rs=>{
    this.vote=rs
    console.log(rs)
  })
  }

}
