import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button class="btn-primary" type="button">
      Lorem ipsum
    </button>
  `,
  styles: [`
    .btn-primary {
      background-color: var(--color-primary);
      color: var(--color-surface);
      font-family: var(--font-body);
      font-weight: 700;
      font-size: var(--text-base);
      border: none;
      border-radius: var(--radius-sm);
      padding: 0 var(--space-2);
      height: 40px;
      cursor: pointer;
      align-self: flex-end;
    }
  `]
})
export class AppButtonComponent {}
