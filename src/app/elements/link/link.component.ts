import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() href: string = '';
  @Input() target: string = '_blank';
  @Input() title: string = '';
  @Input() underlineColor: string = '#000';
}
