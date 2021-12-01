import { createReducer, on } from '@ngrx/store';
import { PokedexPushPokemon, PokedexSetPokemons } from './user.actions';
import { initialPokedexState } from './user.state';

export const pokedexReducers = createReducer(
    initialPokedexState,
    on(PokedexPushPokemon, (state, { pokemon }) => ({
        ...state,
        pokemons: [...state.pokemons, pokemon]
    })),
    on(PokedexSetPokemons, (state, { pokemons }) => ({
        ...state,
        pokemons: []
    }))
);
