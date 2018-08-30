import React from 'react'
import PokemonView from './PokemonView'

class PokemonController extends React.Component {
    state = {
        pokemonImage: '1.gif',
        pokemonName: ''
    }

    setRandomPokemonImage = () => {
        const rand = Math.ceil(Math.random() * 10)
        this.setState({ pokemonImage: `${rand}.gif` })
    }

    setPokemonName = (e) => {
        this.setState({ pokemonName: e.target.value })
    }

    clearPokemonName() {
        this.setState({ pokemonName: '' })
    }

    savePokemon = () => {
        this.props.viewModel.addPokemon({
            image: this.state.pokemonImage,
            name: this.state.pokemonName
        })
    }

    addPokemon = () => {
        this.savePokemon()
        this.clearPokemonName()
    }

    removePokemon = (pokemon) => {
        this.props.viewModel.removePokemon(pokemon)
    }

    render() {
        const { viewModel } = this.props

        return (
            <PokemonView
                pokemons={viewModel.getPokemons()}
                pokemonImage={this.state.pokemonImage}
                randomizePokemon={this.setRandomPokemonImage}
                setPokemonName={this.setPokemonName}
                addPokemon={this.addPokemon}
                removePokemon={this.removePokemon}
                pokemonName={this.state.pokemonName}
                shouldDisableSubmit={!this.state.pokemonName}
            />
        )
    }
}

export default PokemonController