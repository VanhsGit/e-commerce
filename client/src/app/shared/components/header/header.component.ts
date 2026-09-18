import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cm-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, NzButtonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
