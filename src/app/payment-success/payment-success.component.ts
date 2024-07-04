import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StripeService } from '../services/stripe-service.service';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, RouterLink],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.scss',
})
export class PaymentSuccessComponent {
  constructor(
    private route: ActivatedRoute,
    private stripeService: StripeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit() {
    const { paymentId, status } = this.route.snapshot.queryParams;
    this.stripeService.verifyCheckoutSession(paymentId).then((res) => {
      console.log(res);
      if (isPlatformBrowser(this.platformId)) {
        let audio = new Audio();
        audio.src = '/assets/audio/gpay.mp3';
        audio.load();
        audio.play();
      }
    });
  }
}
