import { Component, OnInit } from '@angular/core';
import {EventtService} from "../../service/eventt.service";
import {Eventt} from "../../model/Eventt";

@Component({
  selector: 'app-find-all-event',
  templateUrl: './find-all-event.component.html',
  styleUrls: ['./find-all-event.component.css']
})
export class FindAllEventComponent implements OnInit {
  eventts: Eventt[]=[];
  constructor(private eventtService : EventtService) { }

  ngOnInit(): void {
    this.eventtService.getAllEvent().subscribe(result =>{
        // @ts-ignore
      this.eventts=result;
        console.log(result);
      },error => {
        console.log(error)
      }
    )
  }
  delete(){
    // @ts-ignore
    this.eventtService.deleteEvent(this.eventt.id).subscribe(()=>{
      alert("xóa thành công")
    })
  }
}
