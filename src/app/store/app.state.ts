import { initialPokedexState, IPokedexState } from "./modules/pokemons/user.state";

export interface IAppState {
  pokedex: IPokedexState;
}

export const InitialAppState: IAppState = {
  pokedex: initialPokedexState
};

export function getInitialState(): IAppState {
  return InitialAppState;
}
