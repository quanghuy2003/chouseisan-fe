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
  votess: any[]=[]
  votesss: Vote[]=[]
  constructor(private voteService : VoteService) { }

  ngOnInit(): void {
    this.voteService.getAllSchedule().subscribe(result =>{
        // @ts-ignore
        this.votes=result;
        this.voteService.getAllStatus().subscribe(rs=>{


          this.votess=rs;
          // this.votess = [
          //   {
          //     id: 1,
          //     name: "sample",
          //     detail: "sample",
          //     time: "sample",
          //     votes: [
          //       {
          //         id: 1,
          //         comment: "sample",
          //         schedule: "sample",
          //         status: 123
          //       },
          //       {
          //         id: 2,
          //         comment: "sample",
          //         schedule: "sample",
          //         status: 145
          //       }
          //     ]
          //   },
          //   {
          //     id: 2,
          //     name: "sample",
          //     detail: "sample",
          //     time: "sample",
          //     votes: [
          //       {
          //         id: 1,
          //         comment: "sample",
          //         schedule: "sample",
          //         status: 223
          //       },
          //       {
          //         id: 2,
          //         comment: "sample",
          //         schedule: "sample",
          //         status: 345
          //       },
          //       {
          //         id: 2,
          //         comment: "sample",
          //         schedule: "sample",
          //         status: 666
          //       }
          //     ]
          //   }
          // ]
          this.voteService.getAllComment().subscribe(rss=>{
            this.votesss=rss
          })
        })
      }
    )
  }
}
