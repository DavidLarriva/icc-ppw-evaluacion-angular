import { Injectable } from '@angular/core';
import { Character } from '../models/character.interface';

@Injectable({ providedIn: 'root' })
export class CharacterCacheService {
  private readonly prefix = 'item-cache-';   // cada personaje en su clave

  // guarda personaje en clave independiente
  save(character: Character): void {
    localStorage.setItem(this.prefix + character.id, JSON.stringify(character));
  }

  // recupera un personaje por id 
  getById(id: number): Character | null {
    try {
      const raw = localStorage.getItem(this.prefix + id);
      return raw ? (JSON.parse(raw) as Character) : null;
    } catch {
      return null;   // 
    }
  }
}
