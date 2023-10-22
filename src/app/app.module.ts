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

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventThumbnailComponent,
    NavComponent,
    EventViewComponent,
    EventCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [EventsService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
