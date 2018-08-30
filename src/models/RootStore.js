import PokemonModel from './domain/PokemonModel'

class RootStore {
    static type = {
        POKEMON_MODEL: 'pokemonModel'
    }

    constructor() {
        this.pokemonModel = new PokemonModel()
    }

    getStores = () => ({
        [RootStore.type.POKEMON_MODEL]: this.pokemonModel
    })
}

export default RootStore