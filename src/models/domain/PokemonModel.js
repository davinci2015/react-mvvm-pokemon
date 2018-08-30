import { observable, action } from 'mobx'
import uuid from 'uuid/v4'

class PokemonModel {
    @observable pokemons = []

    @action addPokemon(pokemon) {
        this.pokemons.push({
            id: uuid(),
            ...pokemon
        })
    }

    @action removePokemon(pokemon) {
        this.pokemons.remove(pokemon)
    }

    @action clearAll() {
        this.pokemons.clear()
    }

    getPokemons() {
        return this.pokemons
    }
}

export default PokemonModel