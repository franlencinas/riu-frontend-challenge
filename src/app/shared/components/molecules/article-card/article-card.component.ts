import { Component } from '@angular/core';
import { BadgeDateComponent } from '../../atoms/badge-date/badge-date.component';
import { ImagePlaceholderComponent } from '../../atoms/image-placeholder/image-placeholder.component';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [BadgeDateComponent, ImagePlaceholderComponent],
  templateUrl: './article-card.component.html'
})
export class ArticleCardComponent {}
