import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from './country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private urlCountries = 'https://restcountries.eu/rest/v2/all?fields=name;flag;population;region;capital;alpha3Code';
  //private urlCountry = 'https://restcountries.eu/rest/v2/alpha/';
  //private urlBorders = 'https://restcountries.eu/rest/v2/alpha?codes=';
  private url = 'https://restcountries.eu/rest/v2';


  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<Country[]>(`${this.url}/all`)
  }

  getCountryByName(name: string) {
    return this.http
      .get<Country[]>(`${this.url}/name/${name}`)
      .pipe(map(([res]) => res));
  }

  getCountriesByCodes(codes: string[]) {
    return this.http.get<Country[]>(`${this.url}/alpha?codes=${codes.join(';')}`)
  }

}
