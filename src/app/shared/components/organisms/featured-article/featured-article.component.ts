import { Component } from '@angular/core';
import { BadgeDateComponent } from '../../atoms/badge-date/badge-date.component';
import { AppButtonComponent } from '../../atoms/app-button/app-button.component';
import { ImagePlaceholderComponent } from '../../atoms/image-placeholder/image-placeholder.component';

@Component({
  selector: 'app-featured-article',
  standalone: true,
  imports: [BadgeDateComponent, AppButtonComponent, ImagePlaceholderComponent],
  templateUrl: './featured-article.component.html',
  styleUrl: './featured-article.component.css'
})
export class FeaturedArticleComponent {}
