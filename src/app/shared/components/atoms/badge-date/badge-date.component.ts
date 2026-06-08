import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-date',
  standalone: true,
  imports: [],
  templateUrl: './badge-date.component.html'
})
export class BadgeDateComponent {
  @Input() label: string = '';
}
