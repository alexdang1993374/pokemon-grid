import axios from 'axios';

// Shared Axios instance for PokeAPI. Docs: https://pokeapi.co/docs/v2
export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});
