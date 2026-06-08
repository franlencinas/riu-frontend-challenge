import { Component, Input } from '@angular/core';
import { ImagePlaceholderComponent } from '../../atoms/image-placeholder/image-placeholder.component';
import { IconDownloadComponent } from '../../atoms/icon-download/icon-download.component';

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  imports: [ImagePlaceholderComponent, IconDownloadComponent],
  templateUrl: './gallery-card.component.html',
  styleUrl: './gallery-card.component.css'
})
export class GalleryCardComponent {
  @Input() small: boolean = false;
}
