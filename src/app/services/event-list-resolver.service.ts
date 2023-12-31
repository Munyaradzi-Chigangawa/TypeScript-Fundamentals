import { Injectable } from '@angular/core';
import { EventsService } from './events.service';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService  implements Resolve<any>{

  constructor(private eventService: EventsService) { }

  resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
