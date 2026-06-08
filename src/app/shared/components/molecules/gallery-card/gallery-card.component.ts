import { Component, Input } from '@angular/core';
import { ImagePlaceholderComponent } from '../../atoms/image-placeholder/image-placeholder.component';

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  imports: [ImagePlaceholderComponent],
  template: `
    <div class="gallery-card" [class.gallery-card--small]="small">
      <app-image-placeholder height="100%" class="gallery-card__bg"></app-image-placeholder>
      <div class="gallery-card__overlay">
        <div class="gallery-card__content">
          <h3 class="gallery-card__title">Lorem ipsum dolor</h3>
          <p class="gallery-card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          <a href="#" class="gallery-card__link">
            <span>Download</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="3" y="17" width="18" height="3" rx="1" fill="white" fill-opacity="0.5"/>
              <path d="M12 3V15M12 15L8 11M12 15L16 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .gallery-card {
      position: relative;
      isolation: isolate;
      border-radius: var(--radius-sm);
      overflow: hidden;
      height: 320px;
    }
    .gallery-card__bg {
      display: block;
      width: 100%;
      height: 100%;
    }
    @media (min-width: 768px) {
      .gallery-card {
        height: 378px;
      }
      .gallery-card--small {
        height: 203px;
      }
    }
    @media (min-width: 1024px) {
      .gallery-card {
        height: 482px;
      }
      .gallery-card--small {
        height: 482px;
      }
    }
    .gallery-card__overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 175px;
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%);
      display: flex;
      align-items: flex-end;
      padding: var(--space-4);
    }
    .gallery-card__content {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
      width: 100%;
    }
    .gallery-card__title {
      font-family: var(--font-body);
      font-weight: 700;
      font-size: var(--text-3xl);
      color: white;
      margin: 0;
    }
    .gallery-card__subtitle {
      font-family: var(--font-body);
      font-weight: 400;
      font-size: var(--text-base);
      line-height: var(--leading-normal);
      color: white;
      margin: 0;
    }
    .gallery-card__link {
      display: flex;
      align-items: baseline;
      gap: var(--space-2);
      font-family: var(--font-body);
      font-weight: 700;
      font-size: var(--text-base);
      color: white;
      text-decoration: none;
    }
    .gallery-card__link svg {
      vertical-align: middle;
    }
  `]
})
export class GalleryCardComponent {
  @Input() small: boolean = false;
}
