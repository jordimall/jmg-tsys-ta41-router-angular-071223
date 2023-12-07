import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiRickAndMortyService } from './../../services/api-rick-and-morty.service';

@Component({
  selector: 'app-random-characters',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './random-characters.component.html',
  styleUrl: './random-characters.component.css',
})
export class RandomCharactersComponent {
  characters: any;
  arrayNumbre: number[] = [];

  constructor(private apiRickMorty: ApiRickAndMortyService) {}

  ngOnInit(): void {
    this.generateRandomNumbers();
    this.apiRickMorty
      .getAPIRandomCharacters(this.arrayNumbre.join(','))
      .subscribe((data: any): void => {
        this.characters = data;
      });
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
}
