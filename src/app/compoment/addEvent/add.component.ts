import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EventtService} from "../../service/eventt.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-addEvent',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // @ts-ignore
  event: Eventt = {

  };
  constructor(private eventtService: EventtService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,) { }

  ngOnInit(): void {
  }

  eventtForm : FormGroup= this.fb.group({
    name : new FormControl('',Validators.required),
    detail : new FormControl('',Validators.required),
    time : new FormControl('',Validators.required)
  })

  add() {
    const eventts = this.eventtForm.value;
    this.eventtService.addEvent(eventts).subscribe(() => {
      alert("thêm thành công")
    })
  }
}
