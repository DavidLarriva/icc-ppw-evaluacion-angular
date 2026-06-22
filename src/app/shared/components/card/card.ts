import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Character } from '../../../features/rickmorty/models/character.interface';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  item = input.required<Character>();   // recibe UN personaje del padre
  total = input.required<number>();     // total para llevarlo por queryParams al detalle
}