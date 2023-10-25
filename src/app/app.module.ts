import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './features/events/events.component';
import { EventThumbnailComponent } from './features/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './features/nav/nav.component';
import { EventsService } from './services/events.service';
import { ToastrService } from './shared/toastr.service';
import { EventViewComponent } from './features/event-view/event-view.component';
import { EventCreateComponent } from './features/event-create/event-create.component';
import { Error404Component } from './shared/error404/error404.component';
import { EventRouteActivatorService } from './shared/event-route-activator.service';
import { EventListResolverService } from './services/event-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventThumbnailComponent,
    NavComponent,
    EventViewComponent,
    EventCreateComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouteActivatorService,
    EventListResolverService,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: EventCreateComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
  
}