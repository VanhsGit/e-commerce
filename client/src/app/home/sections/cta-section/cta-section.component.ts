import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeCtaContent } from '../../home-content.model';

@Component({
  selector: 'app-home-cta',
  standalone: true,
  imports: [MatIconModule, 
    CommonModule,
    NzButtonModule,
  ],
  templateUrl: './cta-section.component.html',
})
export class CtaSectionComponent {
  @Input({ required: true }) content!: HomeCtaContent;
}
