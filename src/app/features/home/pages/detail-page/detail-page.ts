import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { of, tap } from 'rxjs';
import { RickMortyService } from '../../../rickmorty/services/rick-morty';
import { CharacterCacheService } from '../../../rickmorty/services/character-cache';
import { Card } from '../../../../shared/components/card/card';
import { PageHeroService } from '../../../../shared/services/page-hero';

@Component({
  selector: 'app-detail-page',
  imports: [Card, RouterLink],
  templateUrl: './detail-page.html',
  styleUrl: './detail-page.css',
})
export class DetailPage {
  private route = inject(ActivatedRoute);
  private rickMortyService = inject(RickMortyService);
  private cache = inject(CharacterCacheService);
  private pageHero = inject(PageHeroService);

  // id desde el route param 
  id = Number(this.route.snapshot.paramMap.get('id'));

  // total desde el query param (
  private totalParam = this.route.snapshot.queryParamMap.get('total');
  totalNumber = this.totalParam === null ? null : Number(this.totalParam);

  constructor() {
    this.pageHero.titulo.set('Detalle del personaje');
    this.pageHero.total.set(this.totalNumber);   // sincroniza el Hero del layout
  }

  charactersResource = rxResource({
    stream: () => {
      const cached = this.cache.getById(this.id);   // 
      if (cached) {
        return of(cached);
      }
      // si no está cacheado usa APIS Y GUARDA
      return this.rickMortyService.getCharacterById(this.id).pipe(
        tap((c) => this.cache.save(c)),
      );
    },
  });
}
