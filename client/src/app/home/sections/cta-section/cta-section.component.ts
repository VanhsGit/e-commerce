import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HomeCtaContent } from '../../home-content.model';

@Component({
  selector: 'app-home-cta',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.scss',
})
export class CtaSectionComponent {
  @Input({ required: true }) content!: HomeCtaContent;
}
