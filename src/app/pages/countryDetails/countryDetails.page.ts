import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private countryService: CountryService, private firebaseService: FireBaseCnxService) {}

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

  addToFavorites(countryCode: string) {
    this.countryService.addToFavorites(countryCode);

    // Firebase
    this.firebaseService.saveCountries(countryCode);
  }
  exchange() {
    if (this.inputValue) {
      this.ResultExchange = (this.inputValue * this.USDValue).toString();
    }
  }
}
