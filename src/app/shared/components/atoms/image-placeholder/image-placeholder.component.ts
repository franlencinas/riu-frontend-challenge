import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-placeholder',
  standalone: true,
  imports: [],
  template: `
    <div
      class="image-placeholder"
      [style.height]="height"
      role="img"
      aria-label="Image placeholder"
    >
      <span class="image-placeholder__label">IMAGE</span>
    </div>
  `,
  styles: [`
    .image-placeholder {
      background-color: var(--color-image-bg);
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .image-placeholder__label {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 36px;
      color: var(--color-image-label);
    }
  `]
})
export class ImagePlaceholderComponent {
  @Input() height: string = '200px';
}
