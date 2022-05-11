import { Component, OnInit } from '@angular/core';
import {VoteService} from "../../service/vote.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Vote} from "../../model/Vote";
import { Status } from '../../../constants/status'

@Component({
  selector: 'app-add-vote',
  templateUrl: './add-vote.component.html',
  styleUrls: ['./add-vote.component.css']
})

export class AddVoteComponent implements OnInit {
  // @ts-ignore
  vote: Vote[]=[]
  tick: Number[]
  status: Number = 1
  constructor(private voteService: VoteService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {

    this.tick = Status.status
  }

  ngOnInit(): void {
    this.voteService.getAllVote().subscribe(rs=>{
      this.vote=rs
    })
  }

  voteForm : FormGroup= this.fb.group({
    schedule : new FormControl('',Validators.required),
    status : new FormControl('',Validators.required),
    comment : new FormControl('',Validators.required)
  })

  add() {
    const votes = this.voteForm.value;
    votes.status = this.status
    this.voteService.addVote(votes).subscribe(() => {
      alert("thêm thành công")
      this.router.navigate(["/findVote"])
    })
  }

  setStatus(status: Number) {
    this.status = status
  }
}
