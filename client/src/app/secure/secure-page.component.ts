import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-secure-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NzButtonModule],
  templateUrl: './secure-page.component.html',
})
export class SecurePageComponent {
  title = 'Secure page';
}
