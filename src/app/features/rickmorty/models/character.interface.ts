// src/app/features/rickmorty/models/character.interface.ts

// respuesta completa 
export interface CharacterListResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;       // puede estar vacio
    prev: string | null;
  };
  results: Character[];        // arreglo de personajes
}

// lugar del personaje 
export interface CharacterPlace {
  name: string;
  url: string;
}

// personaje individual
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterPlace;
  location: CharacterPlace;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
