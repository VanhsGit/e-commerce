import { Address } from './../../shared/models/address';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../../account/account.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TextInputComponent } from '../../shared/components/text-input/text-input.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-checkout-address',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NzButtonModule, TextInputComponent],
  templateUrl: './checkout-address.component.html'
})
export class CheckoutAddressComponent implements OnInit {
  @Input() checkoutForm: FormGroup;

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  async saveUserAddress(): Promise<void> {
    try {
      const address = await firstValueFrom(this.accountService.updateUserAddress(this.checkoutForm.get('addressForm').value));
      this.toastr.success('Address Saved');
      this.checkoutForm.get('addressForm').reset(address);
    } catch (error: any) {
      this.toastr.error(error?.message ?? 'Unable to save address');
      console.log(error);
    }
  }

}
