import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  titulo = input.required<string>();          // el título lo pasa el padre
  total = input.required<number | null>();    // el total lo pasa el padre (puede no venir)

  // resuelve el texto del total: válido -> "Total de registros: N", si no -> "ERROR EN TOTAL"
  mensaje = computed(() => {
    const t = this.total();
    return t !== null && !Number.isNaN(t)
      ? `Total de registros: ${t}`
      : 'ERROR EN TOTAL';
  });
}