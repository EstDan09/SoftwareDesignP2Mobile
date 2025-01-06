import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../pages/models/country.interface'; 

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  private favorites: string[] = [];
  private visited : string[] = [];
  constructor(private http: HttpClient) { }
  
  searchByCapital ( term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`);
  }

  countryDetails(name: string): Observable<{
    officialName: string,
    population: number;
    currency: string;
    languages: string[];
  }> {
    return new Observable(observer => {
      this.http.get<any[]>(`${this.apiUrl}/name/${name}`).subscribe({
        next: (response) => {
          if (response && response.length > 0) {
            const country = response[0];
            const officialName = country.name?.official || 'N/A';
            const population = country.population || 0;
            const currency = Object.keys(country.currencies || {})
              .map(key => country.currencies[key]?.name)
              .join(', ') || 'N/A';
            const languages = Object.values(country.languages || []) as string[];
            observer.next({ officialName, population, currency, languages });
            observer.complete();
          } else {
            observer.error('Country not found');
          }
        },
        error: (err) => observer.error(err),
      });
    });
  }

  getFavorites(): string[] {
    return this.favorites;
  }

  getVisited(): string[] {
    return this.visited;
  }

  addToFavorites(countryName: string): void {
    if (!this.favorites.includes(countryName)) {
      this.favorites.push(countryName);
    }
  }

  addToVisited(countryName: string): void {
    if (!this.visited.includes(countryName)) {
      this.visited.push(countryName);
    }
  }

  removeFromFavorites(countryName: string): void {
    this.favorites = this.favorites.filter(name => name !== countryName);
  }

  removeFromVisited(countryName: string): void {
    this.visited = this.visited.filter(name => name !== countryName);
  }
}


