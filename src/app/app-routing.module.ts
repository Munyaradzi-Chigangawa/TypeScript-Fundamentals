import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './features/events/events.component';
import { EventViewComponent } from './features/event-view/event-view.component';
import { EventCreateComponent } from './features/event-create/event-create.component';
import { Error404Component } from './shared/error404/error404.component';
import { EventRouteActivatorService } from './shared/event-route-activator.service';
import { EventListResolverService } from './services/event-list-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events/new', component: EventCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsComponent, resolve: {events: EventListResolverService} },
  { path: 'events/:id', component: EventViewComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: Error404Component },
  { path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
