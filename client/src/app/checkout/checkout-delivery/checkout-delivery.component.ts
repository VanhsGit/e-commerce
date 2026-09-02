import { BasketService } from './../../basket/basket.service';
import { IDeliveryMethod } from './../../shared/models/deliveryMethod';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckoutService } from './../checkout.service';
import { Component, OnInit, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-checkout-delivery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CdkStepperModule, NzButtonModule, NzRadioModule],
  templateUrl: './checkout-delivery.component.html'
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input({ required: true }) checkoutForm!: FormGroup;
  readonly deliveryMethods = signal<IDeliveryMethod[]>([]);

  constructor(private checkoutService: CheckoutService, private basketService: BasketService) { }

  async ngOnInit(): Promise<void> {
    try {
      const methods = await firstValueFrom(this.checkoutService.getDeliveryMethods());
      this.deliveryMethods.set(methods);
    } catch (error) {
      console.log(error);
    }
  }

  setShippingPrice(deliveryMethod: IDeliveryMethod){
    this.basketService.setShippingPrice(deliveryMethod);
  }

}
