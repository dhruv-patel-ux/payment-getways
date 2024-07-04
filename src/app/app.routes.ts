import { Routes } from '@angular/router';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailComponent } from './payment-fail/payment-fail.component';
import { StripConfigurationComponent } from './strip-configuration/strip-configuration.component';

export const routes: Routes = [
  {
    path: '',
    component: StripConfigurationComponent,
  },
  {
    path: 'success',
    component: PaymentSuccessComponent,
  },
  {
    path: 'cancle',
    component: PaymentFailComponent,
  },
];
