# Personajes de Rick y Morty

App pequeña hecha con Angular para practicar. Muestra una lista de personajes
de Rick y Morty y, al hacer clic en uno, abre su detalle.

## Qué hace

- Muestra personajes con su foto y su nombre.
- Al pulsar una tarjeta (la imagen o el nombre), abre el detalle de ese personaje.
- Cada personaje que abres queda guardado en el navegador, así la próxima vez
  carga al instante en lugar de volver a pedirlo a internet.

## Cómo ejecutarlo

Necesitas tener [Node](https://nodejs.org) instalado. Luego, dentro de la carpeta
del proyecto:

```bash
npm install   # solo la primera vez
npm start
```

Y abre http://localhost:4200 en el navegador.

> Para generar la versión final lista para publicar: `npm run build`.

## De dónde salen los datos

De la API pública de Rick y Morty: https://rickandmortyapi.com
Solo se leen datos; la app no crea ni borra nada en la API.

## Organizacion

- `features/rickmorty/services/rick-morty.ts` → pide los datos a la API.
- `features/rickmorty/services/character-cache.ts` → guarda y lee los personajes
  en el navegador (localStorage).
- `features/home/pages/home-page` → la pantalla de la lista.
- `features/home/pages/detail-page` → la pantalla del detalle.

## Hecho con

Angular 21, TypeScript y un poco de Tailwind para los estilos.
