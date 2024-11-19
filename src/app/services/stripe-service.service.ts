import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  constructor(private http: HttpClient) {}
  private stripePromise = loadStripe(
    'your strip public key'
  );

  async createCheckoutSession(body: any) {
    const stripe = await this.stripePromise;
    this.http
      .post('http://localhost:5000/stipe/create-checkout-session', {
        ...body,
      })
      .subscribe(async (session: any) => {
        if (stripe && session) {
          const response = await stripe.redirectToCheckout({
            sessionId: session.id,
          });
          console.error('Error:', response);
        }
      });
  }
  async verifyCheckoutSession(paymentId: string) {
    return this.http
      .get(
        `http://localhost:5000/stipe/verify-checkout-session?paymentId=${paymentId}`
      )
      .subscribe();
  }

}
