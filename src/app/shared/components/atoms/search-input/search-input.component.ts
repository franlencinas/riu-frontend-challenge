import { Component } from '@angular/core';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [],
  template: `
    <div class="search-wrapper">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="7" cy="7" r="4.5" stroke="#1C274C" stroke-width="1.5"/>
        <path d="M10.5 10.5L14 14" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <input
        type="search"
        class="search-input"
        placeholder="Search..."
        aria-label="Search articles"
      />
    </div>
  `,
  styles: [`
    .search-wrapper {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      background-color: var(--color-background);
      border-radius: var(--radius-sm);
      height: 40px;
      padding: 0 var(--space-4);
    }
    .search-input {
      border: none;
      background: transparent;
      font-family: var(--font-body);
      font-size: var(--text-base);
      color: var(--color-text-primary);
      outline: none;
      flex: 1;
    }
    .search-input::placeholder {
      color: var(--color-image-label);
    }
  `]
})
export class SearchInputComponent {}
