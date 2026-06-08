import { Component, Input } from '@angular/core';
import { SearchInputComponent } from '../../atoms/search-input/search-input.component';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [SearchInputComponent],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css'
})
export class SectionHeaderComponent {
  @Input() title: string = 'Lorem Ipsum';
  @Input() label: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing.';
}
