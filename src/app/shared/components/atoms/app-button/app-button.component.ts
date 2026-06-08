import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './app-button.component.html'
})
export class AppButtonComponent {
  @Input() label: string = 'Lorem ipsum';
}
