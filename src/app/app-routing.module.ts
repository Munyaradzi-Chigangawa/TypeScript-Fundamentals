import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './features/events/events.component';
import { EventViewComponent } from './features/event-view/event-view.component';
import { EventCreateComponent } from './features/event-create/event-create.component';

const routes: Routes = [
  { path:'', redirectTo: 'events', pathMatch:'full' },
  { path: 'events/new', component: EventCreateComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
