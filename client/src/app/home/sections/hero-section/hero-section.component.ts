import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
  ],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  @Output() navigate = new EventEmitter<string>();
}
