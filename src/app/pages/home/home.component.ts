import { Component } from '@angular/core';
import { FeaturedArticleComponent } from '../../shared/components/organisms/featured-article/featured-article.component';
import { ArticleGridComponent } from '../../shared/components/organisms/article-grid/article-grid.component';
import { GallerySectionComponent } from '../../shared/components/organisms/gallery-section/gallery-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturedArticleComponent, ArticleGridComponent, GallerySectionComponent],
  template: `
    <main>
      <app-featured-article></app-featured-article>
      <app-article-grid></app-article-grid>
      <app-gallery-section></app-gallery-section>
    </main>
  `,
  styles: []
})
export class HomeComponent {}
