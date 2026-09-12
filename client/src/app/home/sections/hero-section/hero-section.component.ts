import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NzButtonModule,
  ],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  @Output() navigate = new EventEmitter<string>();

  readonly allProductsUrl = ['/products', 'all'];
}
