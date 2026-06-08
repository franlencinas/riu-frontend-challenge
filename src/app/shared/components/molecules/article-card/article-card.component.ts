import { Component } from '@angular/core';
import { BadgeDateComponent } from '../../atoms/badge-date/badge-date.component';
import { ImagePlaceholderComponent } from '../../atoms/image-placeholder/image-placeholder.component';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [BadgeDateComponent, ImagePlaceholderComponent],
  template: `
    <article class="article-card">
      <app-image-placeholder class="article-card__image article-card__image--mobile" height="236px"></app-image-placeholder>
      <app-image-placeholder class="article-card__image article-card__image--tablet" height="189px"></app-image-placeholder>
      <app-image-placeholder class="article-card__image article-card__image--desktop" height="277px"></app-image-placeholder>
      <app-badge-date></app-badge-date>
      <h3 class="article-card__title">Lorem ipsum dolor sit amet consectetur</h3>
      <p class="article-card__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </article>
  `,
  styles: [`
    .article-card {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }
    .article-card__title {
      font-family: var(--font-body);
      font-weight: 700;
      font-size: var(--text-xl);
      line-height: 25px;
      color: var(--color-text-dark);
      margin: 0;
    }
    .article-card__body {
      font-family: var(--font-body);
      font-weight: 400;
      font-size: var(--text-base);
      line-height: var(--leading-normal);
      color: var(--color-text-primary);
      margin: 0;
    }
    .article-card__image--tablet,
    .article-card__image--desktop {
      display: none;
    }
    @media (min-width: 768px) {
      .article-card__title {
        font-size: var(--text-3xl);
        line-height: 38px;
      }
      .article-card__image--mobile {
        display: none;
      }
      .article-card__image--tablet {
        display: flex;
      }
    }
    @media (min-width: 1024px) {
      .article-card__image--tablet {
        display: none;
      }
      .article-card__image--desktop {
        display: flex;
      }
    }
  `]
})
export class ArticleCardComponent {}
