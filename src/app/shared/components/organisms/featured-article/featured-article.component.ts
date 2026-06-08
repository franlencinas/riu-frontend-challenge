import { Component } from '@angular/core';
import { BadgeDateComponent } from '../../atoms/badge-date/badge-date.component';
import { AppButtonComponent } from '../../atoms/app-button/app-button.component';
import { ImagePlaceholderComponent } from '../../atoms/image-placeholder/image-placeholder.component';

@Component({
  selector: 'app-featured-article',
  standalone: true,
  imports: [BadgeDateComponent, AppButtonComponent, ImagePlaceholderComponent],
  template: `
    <section class="featured-section" aria-label="Featured article">
      <div class="featured-section__container">
        <article class="featured-card">
          <div class="featured-card__image-wrapper">
            <app-image-placeholder class="featured-card__image featured-card__image--mobile" height="200px"></app-image-placeholder>
            <app-image-placeholder class="featured-card__image featured-card__image--tablet" height="360px"></app-image-placeholder>
            <app-image-placeholder class="featured-card__image featured-card__image--desktop" height="416px"></app-image-placeholder>
          </div>
          <div class="featured-card__content">
            <app-badge-date></app-badge-date>
            <h1 class="featured-card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do</h1>
            <p class="featured-card__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <app-button></app-button>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .featured-section {
      background-color: var(--color-background);
      padding: var(--space-6) var(--space-3);
    }
    .featured-section__container {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 20px;
    }
    .featured-card {
      background-color: var(--color-surface);
      border-radius: var(--radius-sm);
      box-shadow: var(--shadow-card);
      padding: var(--space-6);
      display: flex;
      flex-direction: column;
      gap: var(--space-6);
    }
    .featured-card__image-wrapper {
      width: 100%;
    }
    .featured-card__image--tablet,
    .featured-card__image--desktop {
      display: none;
    }
    .featured-card__content {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }
    .featured-card__title {
      font-family: var(--font-body);
      font-weight: 700;
      font-size: var(--text-2xl);
      line-height: 28px;
      color: var(--color-text-primary);
      margin: 0;
    }
    .featured-card__body {
      font-family: var(--font-body);
      font-weight: 400;
      font-size: var(--text-base);
      line-height: var(--leading-normal);
      color: var(--color-text-primary);
      margin: 0;
    }
    @media (min-width: 768px) {
      .featured-section {
        padding: var(--space-7) var(--space-6);
      }
      .featured-section__container {
        padding: 0 var(--space-6);
      }
      .featured-card__image--mobile {
        display: none;
      }
      .featured-card__image--tablet {
        display: flex;
      }
    }
    @media (min-width: 1024px) {
      .featured-section {
        padding: var(--space-8) var(--space-6);
      }
      .featured-card {
        flex-direction: row;
        align-items: stretch;
      }
      .featured-card__image-wrapper {
        flex: 1;
        min-width: 0;
      }
      .featured-card__image--tablet {
        display: none;
      }
      .featured-card__image--desktop {
        display: flex;
        height: 416px;
      }
      .featured-card__content {
        flex: 1;
        min-width: 0;
      }
      .featured-card__title {
        font-size: var(--text-4xl);
        line-height: var(--leading-tight);
      }
    }
  `]
})
export class FeaturedArticleComponent {}
