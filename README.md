# Pokémon Grid

Welcome! In this pairing session you'll build a small React app that shows a grid of Pokémon from [PokeAPI](https://pokeapi.co/).

## How the session works

- We have about **an hour**. The core task below should take around 40 minutes. We'll use any time left over to extend it or talk it through.
- **Please think out loud.** We care more about how you approach the problem than about finishing every detail.
- **AI tools are allowed.** If you use them, tell us what you're asking for and walk us through what you keep, change or throw away.
- Ask questions whenever you like. There are no trick questions.

## Getting started

Requires Node 22 or newer.

```bash
npm install
npm run dev
```

| Script              | What it does                        |
| ------------------- | ----------------------------------- |
| `npm run dev`       | Start the dev server                |
| `npm test`          | Run Vitest in watch mode            |
| `npm run test:run`  | Run Vitest once                     |
| `npm run lint`      | Run ESLint                          |
| `npm run typecheck` | Run the TypeScript compiler         |
| `npm run format`    | Format everything with Prettier     |
| `npm run build`     | Type-check and build for production |

## Working with git

Please use git from the **command line** during the session so we can follow along.

1. Before you write any code, create a new branch for your work. Name it after yourself, e.g. `jane-doe/pokemon-grid`.
2. Commit as you go. Aim for small commits with clear messages rather than one big commit at the end.
3. By the end of the session, your work should be committed on your branch. You don't need to push it anywhere.

## What's already set up

- **React 19 + TypeScript** (strict mode) on **Vite**
- **Tailwind CSS v4.** Utility classes work in any component.
- **Axios.** A PokeAPI instance is in `src/api/pokeApi.ts`.
- **Zustand** for state management. `src/stores/useCounterStore.ts` is an example store showing how to create one and use it in a component.
- **Vitest + React Testing Library.** `src/pages/HomePage.test.tsx` is an example test.

```
src/
  api/          Axios instance
  components/   UI components
  hooks/        Custom hooks
  pages/        Page-level components
  stores/       Zustand stores (includes an example)
  test/         Test setup
  types/        TypeScript types
  utils/        Pure helper functions
```

Use the libraries and folders where they make sense. You don't have to use all of them.

## The task

Build a page that shows the **original 151 Pokémon** in a grid.

### Requirements

1. Fetch the list of Pokémon from PokeAPI (see below).
2. Show each Pokémon as a card with:
   - its official artwork image
   - its name
   - its Pokédex number formatted as `#001`, `#025`, `#151`
3. Make the grid responsive, from a single phone-width column up to a wide desktop layout.
4. Handle the **loading** and **error** states.
5. Type the API response. No `any`.
6. Write **at least one test**.
7. Commit your work to your own branch (see [Working with git](#working-with-git)).

### The API

One request gives you everything you need:

```
GET https://pokeapi.co/api/v2/pokemon?limit=151
```

```json
{
  "count": 1351,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=151&limit=151",
  "previous": null,
  "results": [
    { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" },
    { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon/2/" }
  ]
}
```

The list doesn't include images. The official artwork is at this address, where `{id}` is the Pokémon's number:

```
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png
```

**Hint:** each result's `url` already contains its id.

Good luck, and have fun!
