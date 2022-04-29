import { Component, OnInit } from '@angular/core';
import {Eventt} from "../../model/Eventt";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {EventtService} from "../../service/eventt.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  eventt: Eventt = {
    id: '',
    name: '',
    detail:'',
    time:''
  };

  eventForm : FormGroup= this.fb.group({
    name : new FormControl('',Validators.required)
  })

  constructor(
    private eventtService: EventtService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parammap => {
      const id = parammap.get('id');
      console.log(id);
      // @ts-ignore
      this.eventtService.getId(id).subscribe(result =>{
          this.eventt= result;
          console.log(result)
        },
        error => {
          console.log(error)
        })
    },)
    this.eventt = {
      name: '',
      detail:'',
      time:''    }
  }

  updateEventProfile(){
    const event = this.eventForm.value;
    console.log(event);
    // @ts-ignore
    this.eventtService.updateEvent(this.eventt.id,event).subscribe(()=>{
      alert("thành công")
    })
  }

  delete(){
    // @ts-ignore
    this.eventtService.deleteEvent(this.eventt.id).subscribe(()=>{
      alert("xóa thành công")
    })
  }

  create() {
    const event = this.eventForm.value;
    this.eventtService.addEvent(event).subscribe(() => {
      alert("thêm thành công")
    })
  }
}
