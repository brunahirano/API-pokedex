import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input()
  pokemon!: any

  @Input()
  numero!: number

  constructor() {

  }

  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZero(this.numero)
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
  }

  pegarNome() {
    return this.pokemon.name
  }

  //criando uma função para adicionar os 3 dígitos
  //parâmetro ou é string ou number, de tamanho 3
  leadingZero(str: string | number): string {
    let x = String(str)
    while (x.length < (3 || 2)) {
      x = "0" + x
    }
    return x
  }

}
