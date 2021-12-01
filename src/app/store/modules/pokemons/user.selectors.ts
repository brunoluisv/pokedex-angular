import { createSelector } from '@ngrx/store';
import { IAppState } from '../../app.state';
import { IPokedexState } from './user.state';

const selectPokedex = (state: IAppState): IPokedexState => state.pokedex;

export const selectPokedexPokemons = createSelector(
    selectPokedex, 
    (state: IPokedexState) => state.pokemons
);
