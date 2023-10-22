import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  
  events!: any[];

  constructor( private eventservice: EventsService, private toastr: ToastrService) {
   
  }

  ngOnInit() {
    this.events = this.eventservice.getEvents()
  }

  handleEventClick(eventName: any) {
    this.toastr.success(eventName)
  }
}
