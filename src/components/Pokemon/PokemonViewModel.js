class PokemonViewModel {
    constructor(pokemonStore) {
        this.store = pokemonStore
    }

    getPokemons() {
        return this.store.getPokemons()
    }

    addPokemon(pokemon) {
        this.store.addPokemon(pokemon)
    }

    removePokemon(pokemon) {
        this.store.removePokemon(pokemon)
    }
}

export default PokemonViewModel