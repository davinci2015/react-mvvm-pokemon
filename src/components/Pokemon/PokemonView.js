import React from 'react'
import PokemonList from './UI/PokemonList'
import PokemonForm from './UI/PokemonForm'

class PokemonView extends React.Component {
    render() {
        const {
            pokemons,
            pokemonImage,
            pokemonName,
            randomizePokemon,
            setPokemonName,
            addPokemon,
            removePokemon,
            shouldDisableSubmit
        } = this.props

        return (
            <React.Fragment>
                <PokemonForm
                    image={pokemonImage}
                    onInputChange={setPokemonName}
                    inputValue={pokemonName}
                    randomize={randomizePokemon}
                    onSubmit={addPokemon}
                    shouldDisableSubmit={shouldDisableSubmit}
                />
                <PokemonList
                    removePokemon={removePokemon}
                    pokemons={pokemons}
                />
            </React.Fragment>
        )
    }
}

export default PokemonView