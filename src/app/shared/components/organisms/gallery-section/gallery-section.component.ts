import { Component } from '@angular/core';
import { GalleryCardComponent } from '../../molecules/gallery-card/gallery-card.component';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [GalleryCardComponent],
  template: `
    <section class="gallery-section" aria-label="Gallery">
      <div class="gallery-section__container">
        <header class="gallery-section__header">
          <h2 class="gallery-section__title">Lorem Ipsum Gallery</h2>
          <p class="gallery-section__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </header>
        <div class="gallery-grid">
          <app-gallery-card class="gallery-item gallery-item--large"></app-gallery-card>
          <app-gallery-card class="gallery-item gallery-item--large"></app-gallery-card>
          <div class="gallery-small-col">
            <app-gallery-card class="gallery-item gallery-item--small"></app-gallery-card>
            <app-gallery-card class="gallery-item gallery-item--small"></app-gallery-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-section {
      background-color: var(--color-surface);
      padding: var(--space-6) 0;
    }
    .gallery-section__container {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 20px;
    }
    .gallery-section__header {
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
      margin-bottom: var(--space-6);
    }
    .gallery-section__title {
      font-family: var(--font-body);
      font-weight: 700;
      font-size: var(--text-3xl);
      color: var(--color-text-dark);
      margin: 0;
    }
    .gallery-section__body {
      font-family: var(--font-body);
      font-weight: 400;
      font-size: var(--text-base);
      line-height: var(--leading-normal);
      color: var(--color-text-dark);
      margin: 0;
    }
    /* Mobile: 2 col grid */
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-6);
    }
    .gallery-small-col {
      display: contents;
    }
    @media (min-width: 768px) {
      .gallery-section {
        padding: var(--space-7) 0;
      }
      .gallery-section__container {
        padding: 0 var(--space-6);
      }
      .gallery-section__title {
        font-size: var(--text-4xl);
      }
      /* Tablet: flex row, large cards 284px, small stacked in last col */
      .gallery-grid {
        display: flex;
        align-items: flex-start;
        gap: var(--space-6);
      }
      .gallery-item--large {
        width: 284px;
        flex-shrink: 0;
      }
      .gallery-small-col {
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
        flex: 1;
      }
    }
    @media (min-width: 1024px) {
      .gallery-section {
        padding: var(--space-8) 0;
      }
      /* Desktop: 4 equal columns */
      .gallery-grid {
        display: flex;
        gap: var(--space-6);
        align-items: stretch;
      }
      .gallery-item--large {
        flex: 1;
        width: auto;
      }
      .gallery-small-col {
        flex: 2;
        flex-direction: row;
      }
    }
  `]
})
export class GallerySectionComponent {}
