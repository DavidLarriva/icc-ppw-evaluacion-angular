import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, tap, throwError, timeout } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CharacterListResponse, Character } from '../models/character.interface';

@Injectable({ providedIn: 'root' })
export class RickMortyService {
  private http = inject(HttpClient);                 // pedimos HttpClient
  private readonly baseUrl = environment.apiUrl;     // URL desde el environment

  //listado de personajes
  getCharacters(page: number = 1): Observable<CharacterListResponse> {
    return this.http
      .get<CharacterListResponse>(`${this.baseUrl}/character?page=${page}`)
      .pipe(
        delay(2000),   // retardo simulado: mínimo 2s de loading (lo pide la evaluación)
        catchError(() => throwError(() => new Error('No se pudieron cargar los personajes'))),
      );
  }

  //un personaje por id
  getCharacterById(id: number): Observable<Character> {
    return this.http
      .get<Character>(`${this.baseUrl}/character/${id}`)
      .pipe(
        delay(2000),
        timeout(5000),   // si tarda más de 5s, corta
        tap((c) => console.log('Personaje cargado:', c.name)),   // espía (log), no modifica
        catchError(() => throwError(() => new Error('No se pudo cargar el personaje'))),
      );
  }
}
