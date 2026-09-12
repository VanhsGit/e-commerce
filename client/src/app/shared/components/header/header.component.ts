import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'cm-header',
  standalone: true,
  imports: [RouterLink, NzButtonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
