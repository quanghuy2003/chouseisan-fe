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
  votess: Vote[]=[]
  votesss: Vote[]=[]
  constructor(private voteService : VoteService) { }

  ngOnInit(): void {
    this.voteService.getAllSchedule().subscribe(result =>{
        // @ts-ignore
        this.votes=result;
        this.voteService.getAllStatus().subscribe(rs=>{
          this.votess=rs;
          this.voteService.getAllComment().subscribe(rss=>{
            this.votesss=rss
          })
        })
      }
    )
  }
}
