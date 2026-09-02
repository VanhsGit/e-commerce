import { Component, OnInit, Input, input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, NzButtonModule],
  templateUrl: './stepper.component.html',
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],
})
export class StepperComponent extends CdkStepper implements OnInit {
  linearModeSelected = input<boolean>(false);

  ngOnInit(): void {
    this.linear = this.linearModeSelected();
  }

  onClick(index: number) {
    this.selectedIndex = index;
  }
}
