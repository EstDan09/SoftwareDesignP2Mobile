import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/services/CountryService';

@Component({
  selector: 'app-countryDetails',
  templateUrl: './countryDetails.page.html',
  styleUrls: ['./countryDetails.page.scss'],
})
export class countryDetailsPage implements OnInit {
  countryName: string = '';
  details: any = {};

  constructor(private route: ActivatedRoute, private countryService: CountryService) {}

  ngOnInit() {
    this.countryName = this.route.snapshot.paramMap.get('name') || '';
    if (this.countryName) {
      this.countryService.countryDetails(this.countryName).subscribe(
        (res) => {
          this.details = res;
        },
        (err) => {
          console.error('Error fetching country details:', err);
        }
      );
    }
  }

  addToFavorites(countryName: string) {
    this.countryService.addToFavorites(countryName);
  }

  addToVisited(countryName: string) {
    this.countryService.addToVisited(countryName);
  }
}
