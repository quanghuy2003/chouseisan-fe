import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EventtService} from "../eventt.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // // @ts-ignore
  // event: Eventt = {
  //
  // };
  // constructor(private eventService: EventtService,
  //             private activatedRoute: ActivatedRoute,
  //             private fb: FormBuilder,) { }
  //
  // ngOnInit(): void {
  // }
  //
  // eventForm : FormGroup= this.fb.group({
  //   name : new FormControl('',Validators.required),
  //   detail : new FormControl('',Validators.required),
  //   time : new FormControl('',Validators.required)
  // })
  //
  // create() {
  //   const events = this.eventForm.value;
  //   this.eventService.addEvent(events).subscribe(() => {
  //     alert("thêm thành công")
  //   })
  // }
  eventtForm = new FormGroup({
    name : new FormControl("",[Validators.required]),
    detail : new FormControl("",[Validators.required]),
    time : new FormControl("",[Validators.required]),
  })
  constructor(private eventtService : EventtService) { }

  ngOnInit(): void {
  }
  add(){
    const eventt = {
      name: this.eventtForm.value.name,
      detail: this.eventtForm.value.detail,
      time: this.eventtForm.value.time
    } // @ts-ignore
    this.eventtService.addEvent(eventt)
    console.log("hí")
  }
}
