import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiRickAndMortyService {
  constructor(private http: HttpClient) {}

  public getAPIRandomCharacters = (range: string): any => {
    const url = `https://rickandmortyapi.com/api/character/${range}`;
    return this.http.get(url);
  };

  public getShowCharacter = (id: string): any => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    return this.http.get(url);
  };
}
