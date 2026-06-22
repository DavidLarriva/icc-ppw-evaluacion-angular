import { Component, computed, effect, inject } from '@angular/core';
import { RickMortyService } from '../../../rickmorty/services/rick-morty';
import { rxResource } from '@angular/core/rxjs-interop';
import { Card } from '../../../../shared/components/card/card';
import { PageHeroService } from '../../../../shared/services/page-hero';

@Component({
  selector: 'app-home-page',
  imports: [Card],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage
{
  private rickMortyService = inject(RickMortyService);
  private pageHero = inject(PageHeroService);

    charactersResource = rxResource({
    stream: () => this.rickMortyService.getCharacters(1),   // que observable consumir
  });

  total = computed(() => this.charactersResource.value()?.results.length ?? 0);

  constructor() {
    this.pageHero.titulo.set('Listado de personajes');
    effect(() => this.pageHero.total.set(this.total()));   // sincroniza el Hero del layout
  }
}
