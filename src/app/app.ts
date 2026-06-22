import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { Hero } from './shared/components/hero/hero';
import { PageHeroService } from './shared/services/page-hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'estudio-angular';
  protected pageHero = inject(PageHeroService);   // estado del Hero, actualizado por cada página
}