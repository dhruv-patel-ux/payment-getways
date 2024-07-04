import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StripeService } from '../services/stripe-service.service';
import { MatCardModule } from '@angular/material/card';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import {
  FloatLabelType,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-strip-configuration',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './strip-configuration.component.html',
  styleUrl: './strip-configuration.component.scss',
})
export class StripConfigurationComponent {
  constructor(
    private stripeService: StripeService,
    private fb: UntypedFormBuilder
  ) {}
  paymentForm = this.fb.group({
    name: ['', Validators.required],
    quantity: ['', Validators.required],
    price: ['', Validators.required],
    paymentMethod: ['', Validators.required],
  });
  checkout() {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }
    const formValue = this.paymentForm.getRawValue();
    console.log(formValue);

    this.stripeService.createCheckoutSession(formValue);
  }
}
