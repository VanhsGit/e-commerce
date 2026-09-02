import { CdkStepper } from '@angular/cdk/stepper';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from './../../basket/basket.service';
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BasketSummaryComponent } from '../../shared/components/basket-summary/basket-summary.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-checkout-review',
  standalone: true,
  imports: [CommonModule, NzButtonModule, BasketSummaryComponent],
  templateUrl: './checkout-review.component.html'
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper: CdkStepper;

  constructor(private basketService: BasketService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  async createPaymentIntent(): Promise<void> {
    try {
      await firstValueFrom(this.basketService.createPaymentIntent());
      this.appStepper.next();
    } catch (error) {
      console.log(error);
    }
  }

}
