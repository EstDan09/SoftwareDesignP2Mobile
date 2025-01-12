import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CountryService } from 'src/app/services/CountryService';
import { FireBaseCnxService } from 'src/app/services/fire-base-cnx.service';

@Component({
  selector: 'app-countryDetails',
  templateUrl: './countryDetails.page.html',
  styleUrls: ['./countryDetails.page.scss'],
})
export class countryDetailsPage implements OnInit {
  countryName: string = '';
  details: any = {};
  code: string = '';
  public currencyCode?: string;
  private USDValue: number = 0;
  public ResultExchange: string = '';
  public inputValue: number = 0;

  constructor(
    private auth: AuthService,
    private countryService: CountryService,
    private firebaseService: FireBaseCnxService,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.countryName = this.route.snapshot.paramMap.get('name') || '';
    if (this.countryName) {
      this.countryService.countryDetails(this.countryName).subscribe(
        (res) => {
          console.log('details', res);
          this.details = res;

          console.log('currency', this.details.currencies);

          const currencyCodes = this.details.currencies;
          this.currencyCode = currencyCodes.length > 0 ? currencyCodes[0] : 'USD';

          if (this.currencyCode) {
            this.countryService.getCurrencyInfo(this.currencyCode || this.currencyCode || "USD").subscribe(res => {
              this.USDValue = res.conversion_rates['USD'];
              console.log('usd value', this.USDValue); 
            })
          }
        },
        (err) => {
          console.error('Error fetching country details:', err);
        }
      );

      this.countryService.searchByName(this.countryName).subscribe(
        (res) => {
          const country = res[0];
          if (country) {
            this.code = country.cca3;
          }
        },
        (err) => {
          console.error('Error fetching country code:', err);
        }
      );
    }
  }

  showMsg(key: string) {
    this.translateService.get(key).subscribe( async (msg) => {
      const message = await this.toastController.create({
        message: msg,
        duration: 2000,
        position: "middle"
      });

      await message.present();
    });
  }

  addToFavorites(countryCode: string) {
    this.auth.user$.subscribe( (response) => {
      if (response) {
        this.firebaseService.getCountries().then((res) => {
          if (res.includes(countryCode)) {
            this.showMsg("details.alreadyFav");
          } else {
            this.firebaseService.saveCountries(countryCode);
            this.showMsg("details.favMsg");
          }
        });
      } else {
        this.showMsg("details.favErr");
      }
    });
  }
  
  exchange() {
    if (this.inputValue) {
      this.ResultExchange = (this.inputValue * this.USDValue).toString();
    }
  }
}
