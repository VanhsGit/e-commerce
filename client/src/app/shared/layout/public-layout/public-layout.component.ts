import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { PublicFooterComponent } from '../public-footer/public-footer.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PublicFooterComponent],
  template: `
    <cm-header />
    <main class="min-h-screen"><router-outlet /></main>
    <cm-footer />
  `,
})
export class PublicLayoutComponent {}
