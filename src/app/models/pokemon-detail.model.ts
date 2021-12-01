import { Pokemon } from "./pokemon.model";

export interface PokemonDetail {
    id: number;
    height: number;
    stats: Statistic[];
    name: string;
    types: Type[];
    weight: number;
    sprites: Sprite;
}

export interface Type {
    slot: number;
    type: Pokemon;
}

export interface Statistic {
    base_stat: number;
    effort: number;
    stat: Pokemon;
}

export interface SpriteDetail {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface Sprite {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    other: { dream_world: SpriteDetail; home: SpriteDetail; }
}