import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  characters: any[] = [];
  arrayNumbre: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.generateRandomNumbers();
    this.getAPIRandomCharacters();
  }

  private generateRandomNumbers = (): void => {
    const MAX_NUMBER_GENERATE: number = 8;
    while (this.arrayNumbre.length < MAX_NUMBER_GENERATE) {
      const randomId = Math.floor(Math.random() * 826) + 1;
      if (!this.arrayNumbre.includes(randomId)) {
        this.arrayNumbre.push(randomId);
      }
    }
  };

  private getAPIRandomCharacters = (): void => {
    const url = `https://rickandmortyapi.com/api/character/${this.arrayNumbre.join(',')}`;
    this.http.get(url).subscribe((data: any):void => {
      this.characters = data;
    });
  };
}
