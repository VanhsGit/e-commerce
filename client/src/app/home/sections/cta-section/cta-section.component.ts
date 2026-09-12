import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-home-cta',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
  ],
  templateUrl: './cta-section.component.html',
})
export class CtaSectionComponent {}
