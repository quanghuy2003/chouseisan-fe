import { Component, OnInit } from '@angular/core';
import {Vote} from "../../model/Vote";
import {VoteService} from "../../service/vote.service";

@Component({
  selector: 'app-find-vote',
  templateUrl: './find-vote.component.html',
  styleUrls: ['./find-vote.component.css']
})
export class FindVoteComponent implements OnInit {
  votes: Vote[]=[]
  constructor(private voteService : VoteService) { }

  ngOnInit(): void {
    this.voteService.getAllVote().subscribe(result =>{
        // @ts-ignore
        this.votes=result;
        console.log(result);
      },error => {
        console.log(error)
      }
    )
  }
}
