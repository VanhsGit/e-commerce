import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HomeCtaContent } from '../../home-content.model';

@Component({
  selector: 'app-home-cta',
  standalone: true,
  host: { class: 'block' },
  imports: [MatIconModule, CommonModule],
  templateUrl: './cta-section.component.html',
})
export class CtaSectionComponent {
  @Input({ required: true }) content!: HomeCtaContent;
}
