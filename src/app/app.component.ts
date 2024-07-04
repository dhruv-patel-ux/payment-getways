import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment.development';
import { StripConfigurationComponent } from './strip-configuration/strip-configuration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StripConfigurationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'payment-getways';
}
