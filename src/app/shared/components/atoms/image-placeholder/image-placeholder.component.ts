import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-placeholder',
  standalone: true,
  imports: [],
  templateUrl: './image-placeholder.component.html',
  styleUrl: './image-placeholder.component.css'
})
export class ImagePlaceholderComponent {
  @Input() height: string = '200px';
}
