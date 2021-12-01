import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetail } from 'src/app/models/pokemon-detail.model';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
	selector: 'app-detailpage',
	templateUrl: './detailpage.component.html',
	styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {

	pokemon?: PokemonDetail;

	constructor(
		private route: ActivatedRoute,
		private pokedexService: PokedexService,
		private cdr: ChangeDetectorRef
	) { }

	ngOnInit(): void {
		const id = this.route.snapshot.params['id'];
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		this.pokedexService.getPokemonByURL(url).subscribe(pokemon => {
			this.pokemon = pokemon;
			this.cdr.markForCheck();
		});
	}

	get pokemonImage(): string | undefined {
		return this.pokemon?.sprites.other.dream_world.front_default;
	}

	get name(): string | undefined {
		return this.pokemon?.name.toUpperCase();
	}

	get hp(): string | undefined {
		return this.pokemon?.stats[0].base_stat.toString();
	}

	get attack(): string | undefined {
		return this.pokemon?.stats[1].base_stat.toString();
	}

	get defense(): string | undefined {
		return this.pokemon?.stats[2].base_stat.toString();
	}

	get special_attack(): string | undefined {
		return this.pokemon?.stats[3].base_stat.toString();
	}

	get special_defense(): string | undefined {
		return this.pokemon?.stats[4].base_stat.toString();
	}

	get velocity(): string | undefined {
		return this.pokemon?.stats[5].base_stat.toString();
	}
}