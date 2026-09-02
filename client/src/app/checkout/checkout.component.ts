import { BasketService } from './../basket/basket.service';
import { AccountService } from './../account/account.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { RouterModule } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { OrderTotalsComponent } from '../shared/components/order-totals/order-totals.component';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { CheckoutDeliveryComponent } from './checkout-delivery/checkout-delivery.component';
import { CheckoutReviewComponent } from './checkout-review/checkout-review.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { StepperComponent } from '../shared/stepper/stepper.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CdkStepperModule,
    RouterModule,
    OrderTotalsComponent,
    StepperComponent,
    CheckoutAddressComponent,
    CheckoutDeliveryComponent,
    CheckoutReviewComponent,
    CheckoutPaymentComponent,
  ],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  checkoutForm = signal<FormGroup | null>(null);

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private basketService: BasketService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.createCheckoutForm();
    await this.getAddressFormValue();
    this.getDeliveryMethodValue();
  }

  createCheckoutForm(): void {
    const form = this.fb.group({
      addressForm: this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        street: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        zipcode: [null, Validators.required],
      }),
      deliveryForm: this.fb.group({
        deliveryMethod: [null, Validators.required],
      }),
      paymentForm: this.fb.group({
        nameOnCard: [null, Validators.required],
      }),
    });

    this.checkoutForm.set(form);
  }

  async getAddressFormValue(): Promise<void> {
    try {
      const address = await firstValueFrom(
        this.accountService.getUserAddress(),
      );

      if (address) {
        this.checkoutForm()?.get('addressForm')?.patchValue(address);
      }
    } catch (error) {
      console.log(error);
    }
  }

  getDeliveryMethodValue(): void {
    const basket = this.basketService.getCurrentBasketValue();

    if (basket !== null) {
      this.checkoutForm()
        ?.get('deliveryForm')
        ?.get('deliveryMethod')
        ?.patchValue(basket.deliveryMethodId!.toString());
    }
  }
}
