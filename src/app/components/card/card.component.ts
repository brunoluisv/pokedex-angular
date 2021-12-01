import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemon-detail.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() pokemonDetail?: PokemonDetail;

    constructor() { }

    ngOnInit(): void {}

    capitalizeFirstLetter(string?: string): string {
        return `${string?.charAt(0).toUpperCase()}${string?.slice(1)}`;
    }

    get name(): string | undefined {
        return this.pokemonDetail?.name;
    }

    get thumbnail(): string | undefined {
        return this.pokemonDetail?.sprites.other.home.front_default;
    }

    get type(): string | undefined {
        return `bg-${this.pokemonDetail?.types[0].type.name}`;
    }
}