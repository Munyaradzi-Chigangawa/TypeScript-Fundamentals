import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {

  isDirty: Boolean = true;

constructor(private router: Router) { }

  onCancel() {
    this.router.navigate(['/events']);
  }
}