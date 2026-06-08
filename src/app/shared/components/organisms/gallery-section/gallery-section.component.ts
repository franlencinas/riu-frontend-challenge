import { Component } from '@angular/core';
import { GalleryCardComponent } from '../../molecules/gallery-card/gallery-card.component';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [GalleryCardComponent],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.css'
})
export class GallerySectionComponent {}
