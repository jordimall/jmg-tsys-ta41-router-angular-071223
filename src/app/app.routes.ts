import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  {path:'about',component: AboutComponent},
  {path:'characters',component: CharactersComponent},
  {path:'home',component: HomeComponent},
  {path:'',component: HomeComponent},
];
