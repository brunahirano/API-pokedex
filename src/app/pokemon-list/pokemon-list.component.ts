import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../servicos/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  pokemons = []

  constructor(public pokemonService:PokemonService) {
    this.pokemonService.pegarPokemon().subscribe({
      next: (resultado) =>
        this.pokemons = resultado.results,
      error: (erro) => console.error(erro)
    })
  }

}
