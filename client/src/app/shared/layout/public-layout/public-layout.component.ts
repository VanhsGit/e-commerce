import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { PublicFooterComponent } from '../public-footer/public-footer.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PublicFooterComponent],
  template: `
    <div class="bg-white">
      <cm-header />
      <main class="min-h-[60vh]"><router-outlet /></main>
      <cm-footer />
    </div>
  `,
})
export class PublicLayoutComponent {}
