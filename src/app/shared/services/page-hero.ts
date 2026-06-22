import { Injectable, signal } from '@angular/core';

// Estado del Hero compartido por el layout (app.html); cada página lo actualiza al cargar.
@Injectable({ providedIn: 'root' })
export class PageHeroService {
  titulo = signal('');
  total = signal<number | null>(null);
}
