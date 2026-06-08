import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ArticleCardComponent } from '../../molecules/article-card/article-card.component';
import { SectionHeaderComponent } from '../../molecules/section-header/section-header.component';

@Component({
  selector: 'app-article-grid',
  standalone: true,
  imports: [NgFor, ArticleCardComponent, SectionHeaderComponent],
  template: `
    <section class="grid-section" aria-label="Article grid">
      <div class="grid-section__container">
        <app-section-header
          title="Lorem Ipsum"
          label="Lorem ipsum dolor sit amet, consectetur adipiscing.">
        </app-section-header>
        <div class="article-grid">
          <app-article-card *ngFor="let card of cards"></app-article-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .grid-section {
      background-color: var(--color-surface);
      padding: var(--space-6) 0;
    }
    .grid-section__container {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 20px;
    }
    .article-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
    }
    @media (min-width: 768px) {
      .grid-section {
        padding: var(--space-7) 0;
      }
      .grid-section__container {
        padding: 0 var(--space-6);
      }
      .article-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .grid-section {
        padding: var(--space-8) 0;
      }
      .article-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `]
})
export class ArticleGridComponent {
  cards = [1, 2, 3, 4, 5, 6];
}
