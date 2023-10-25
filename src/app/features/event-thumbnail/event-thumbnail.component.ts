import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from 'src/app/shared/models/entities';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {

  @Input()
  event!: IEvent;

}
