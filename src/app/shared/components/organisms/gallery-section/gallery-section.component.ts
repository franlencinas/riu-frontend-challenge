import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { GalleryCardComponent } from '../../molecules/gallery-card/gallery-card.component';

interface GalleryItem {
  title: string;
  subtitle: string;
  small: boolean;
}

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [NgFor, GalleryCardComponent],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.css'
})
export class GallerySectionComponent {
  sectionTitle = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.';
  sectionBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.';

  items: GalleryItem[] = [
    { title: 'Lorem ipsum', subtitle: 'Lorem ipsum dolor sit amet consectetur.', small: false },
    { title: 'Lorem ipsum', subtitle: 'Lorem ipsum dolor sit amet consectetur.', small: false },
    { title: 'Lorem ipsum', subtitle: 'Lorem ipsum dolor sit amet consectetur.', small: true },
    { title: 'Lorem ipsum', subtitle: 'Lorem ipsum dolor sit amet consectetur.', small: true },
  ];

  get largeItems(): GalleryItem[] { return this.items.filter(i => !i.small); }
  get smallItems(): GalleryItem[] { return this.items.filter(i => i.small); }
}
