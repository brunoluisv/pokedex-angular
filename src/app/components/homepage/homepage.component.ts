import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokedexService } from 'src/app/services/pokedex.service';
import { IAppState } from 'src/app/store/app.state';
import { PokedexPushPokemon, PokedexSetPokemons } from 'src/app/store/modules/pokemons/user.actions';
import { selectPokedexPokemons } from 'src/app/store/modules/pokemons/user.selectors';

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

	constructor(
		private pokedexService: PokedexService,
		private store: Store<IAppState>
	) { }

	offset = 0;
	limit = 100;
	count = 0;

	pokemons$ = this.store.select(selectPokedexPokemons);

	ngOnInit(): void {
		this.getPokemons(this.offset, this.limit);
	}

	getPokemons(offset: number, limit: number): void {
		this.pokedexService.getPokemons(offset, limit)
			.subscribe(pokemons => {
				this.count = pokemons.count;
				pokemons.results.forEach(pokemon => {
					this.getPokemonByUrl(pokemon.url);
				});
			});
	}

	getPokemonByUrl(url: string): void {
		this.pokedexService.getPokemonByURL(url)
			.subscribe(pokemon => {
				this.store.dispatch(PokedexPushPokemon({ pokemon: pokemon }));
			});
	}

	onPageChange(page: number): void {
		this.store.dispatch(PokedexSetPokemons({ pokemons: [] }));
		this.offset = (page * 100) - 100;
		this.getPokemons(this.offset, this.limit);
	}

	search(pokemon: string): void {
		if (pokemon !== '') {
			const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
			this.offset = 0;
			this.store.dispatch(PokedexSetPokemons({ pokemons: [] }));
	
			this.getPokemonByUrl(url);
		} else {
			this.store.dispatch(PokedexSetPokemons({ pokemons: [] }));
			this.offset = 0;
			this.getPokemons(this.offset, this.limit);
		}

	}
}