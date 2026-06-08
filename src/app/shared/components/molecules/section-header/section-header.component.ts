import { Component, Input } from '@angular/core';
import { SearchInputComponent } from '../../atoms/search-input/search-input.component';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [SearchInputComponent],
  template: `
    <header class="section-header">
      <h2 class="section-header__title">{{ title }}</h2>
      <div class="section-header__row">
        <p class="section-header__label">{{ label }}</p>
        <app-search-input class="section-header__search"></app-search-input>
      </div>
    </header>
  `,
  styles: [`
    .section-header {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      margin-bottom: var(--space-6);
    }
    .section-header__title {
      font-family: var(--font-body);
      font-weight: 700;
      font-size: var(--text-3xl);
      color: var(--color-text-dark);
      margin: 0;
    }
    .section-header__row {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }
    .section-header__label {
      font-family: var(--font-body);
      font-weight: 400;
      font-size: var(--text-lg);
      color: var(--color-text-dark);
      margin: 0;
    }
    .section-header__search {
      width: 100%;
    }
    @media (min-width: 768px) {
      .section-header__title {
        font-size: var(--text-4xl);
      }
      .section-header__row {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .section-header__search {
        width: 300px;
      }
    }
  `]
})
export class SectionHeaderComponent {
  @Input() title: string = 'Lorem Ipsum';
  @Input() label: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing.';
}
