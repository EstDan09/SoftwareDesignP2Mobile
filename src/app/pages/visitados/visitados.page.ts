import { Component } from '@angular/core';
import { CountryService } from 'src/app/services/CountryService';

@Component({
  selector: 'app-visitados',
  templateUrl: './visitados.page.html',
  styleUrls: ['./visitados.page.scss'],
})
export class VisitadosPage {
  visitados: string[] = [];

  constructor(private countryService: CountryService) {
    this.visitados = this.countryService.getVisited();
  }
}
