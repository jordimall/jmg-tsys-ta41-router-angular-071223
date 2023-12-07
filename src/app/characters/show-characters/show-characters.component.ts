import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRickAndMortyService } from '../../services/api-rick-and-morty.service';
@Component({
  selector: 'app-show-characters',
  standalone: true,
  imports: [],
  templateUrl: './show-characters.component.html',
  styleUrl: './show-characters.component.css',
})
export class ShowCharactersComponent {
  id: any;
  character: any;
  constructor(
    private route: ActivatedRoute,
    private apiRickMorty: ApiRickAndMortyService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.apiRickMorty
        .getShowCharacter(this.id)
        .subscribe((data: any): void => {
          this.character = data;
        });
    }
  }
}
