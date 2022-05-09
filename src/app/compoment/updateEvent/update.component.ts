import { Component, OnInit } from '@angular/core';
import {Eventt} from "../../model/Eventt";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EventtService} from "../../service/eventt.service";

@Component({
  selector: 'app-updateEvent',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  eventForm = new FormGroup({
    name: new FormControl(''),
    detail: new FormControl(''),
    time: new FormControl(''),
  });

  eventt?: Eventt;

  constructor(private activatedRoute: ActivatedRoute,
              private eventtService: EventtService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.eventtService.getId(id).subscribe(res => {
        console.log(res)
        this.eventt = res
        this.eventForm = new FormGroup({
          name: new FormControl(res.name),
          detail: new FormControl(res.detail),
          time: new FormControl(res.time),
        });
      })
    })
  }

  updateEvent() {
    const event = this.eventForm.value;
    console.log(event)
    // @ts-ignore
    this.eventtService.updateEvent(this.eventt?.id, event).subscribe(() => {
      alert("Sửa thành công!")
      this.router.navigate(["/findEvent"])
    })
  }}
