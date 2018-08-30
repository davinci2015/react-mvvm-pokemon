import React from 'react'
import { inject } from 'mobx-react'
import PokemonController from './PokemonController'
import PokemonViewModel from './PokemonViewModel'
import RootStore from '../../models/RootStore'

@inject(RootStore.type.POKEMON_MODEL)
class PokemonProvider extends React.Component {
    constructor(props) {
        super(props)
        const pokemonModel = props[RootStore.type.POKEMON_MODEL]
        this.viewModel = new PokemonViewModel(pokemonModel)
    }

    render() {
        return (
            <PokemonController viewModel={this.viewModel}/>
        )
    }
}

export default PokemonProvider