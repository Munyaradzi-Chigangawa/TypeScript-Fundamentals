import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService: EventsService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const eventExists = !!this.eventService.getEvent(route.params['id']);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }

    return eventExists;
  }
}
