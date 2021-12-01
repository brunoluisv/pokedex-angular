import { PokemonDetail } from "src/app/models/pokemon-detail.model";

export interface IPokedexState {
  pokemons: PokemonDetail[];
}

export const initialPokedexState: IPokedexState = {
  pokemons: []
};
