import { Action, createAction, props } from '@ngrx/store';
import { PokemonDetail } from 'src/app/models/pokemon-detail.model';

export enum EPokedexActions {
    PokedexPushPokemon = '[Pokedex] PushPokemon',
    PokedexSetPokemons = '[Pokedex] SetPokemons'
}

export const PokedexPushPokemon = createAction(
    EPokedexActions.PokedexPushPokemon,
    props<{ pokemon: PokemonDetail }>()
);

export const PokedexSetPokemons = createAction(
    EPokedexActions.PokedexSetPokemons,
    props<{ pokemons: any[] }>()
);
