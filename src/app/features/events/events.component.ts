import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { IEvent } from 'src/app/shared/models/entities';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  
  events!: IEvent[];

  constructor( private eventservice: EventsService, private toastr: ToastrService, private route: ActivatedRoute) {
   
  }

  ngOnInit() {
     this.events = this.route.snapshot.data['events']
  }

  handleEventClick(eventName: any) {
    this.toastr.success(eventName)
  }
}
