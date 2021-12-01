import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { PokemonDetail } from "../models/pokemon-detail.model";
import { Pokemon } from "../models/pokemon.model";
import { Pagination } from "../models/pagination.model";

@Injectable({
    providedIn: 'root'
})

export class PokedexService {
    private url = 'https://pokeapi.co/api/v2';

    constructor(
        private http: HttpClient
    ) {}

    getPokemons(offset: number, limit: number): Observable<Pagination<Pokemon>> {
        const url = `${this.url}/pokemon/?offset=${offset}&limit=${limit}`;
        return this.http.get<Pagination<Pokemon>>(url);
    }

    getPokemonByURL(url: string): Observable<PokemonDetail> {
        return this.http.get<PokemonDetail>(url);
    }
}