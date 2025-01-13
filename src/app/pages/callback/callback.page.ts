import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/CountryService';
import { AuthService } from '@auth0/auth0-angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-callback',
  templateUrl: './callback.page.html',
  styleUrls: ['./callback.page.scss'],
})
export class CallbackPage implements OnInit {
  constructor(private auth: AuthService, private navCtrl: NavController) { }

  ngOnInit(): void {
    console.log('CallbackPage loaded');
    this.auth.handleRedirectCallback().subscribe({
      next: () => {
        console.log('Redirect callback successful');
        this.navCtrl.navigateRoot('/user'); // Redirect to dashboard
      },
      error: (err) => {
        console.error('Redirect callback error:', err);
        this.navCtrl.navigateRoot('/byName'); // Redirect to error or login
      },
    });
  }
}