import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-cta',
  standalone: true,
  imports: [MatIconModule, 
    CommonModule,
    NzButtonModule,
  ],
  templateUrl: './cta-section.component.html',
})
export class CtaSectionComponent {}
