import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app.state';
import { pokedexReducers } from './modules/pokemons/user.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    pokedex: pokedexReducers
};
