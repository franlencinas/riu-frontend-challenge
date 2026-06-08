import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ArticleCardComponent } from '../../molecules/article-card/article-card.component';
import { SectionHeaderComponent } from '../../molecules/section-header/section-header.component';

interface Article {
  title: string;
  body: string;
  date: string;
}

@Component({
  selector: 'app-article-grid',
  standalone: true,
  imports: [NgFor, ArticleCardComponent, SectionHeaderComponent],
  templateUrl: './article-grid.component.html'
})
export class ArticleGridComponent {
  sectionTitle = 'Lorem ipsum dolor sit';
  sectionLabel = 'Lorem ipsum dolor sit';

  articles: Article[] = Array(6).fill({
    date: 'Lorem ipsum dolor sit amet.',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.'
  });
}
