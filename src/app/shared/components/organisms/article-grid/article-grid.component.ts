import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ArticleCardComponent } from '../../molecules/article-card/article-card.component';
import { SectionHeaderComponent } from '../../molecules/section-header/section-header.component';

@Component({
  selector: 'app-article-grid',
  standalone: true,
  imports: [NgFor, ArticleCardComponent, SectionHeaderComponent],
  templateUrl: './article-grid.component.html'
})
export class ArticleGridComponent {
  cards = [1, 2, 3, 4, 5, 6];
}
