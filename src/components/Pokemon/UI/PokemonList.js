import React from 'react'
import {observer} from 'mobx-react'
import Card from './Card'

@observer
class PokemonList extends React.Component {
    render() {
        return (
            <div className="pokemon-list">
                {
                    this.props.pokemons.map(pokemon => (
                        <Card
                            key={pokemon.id}
                            image={pokemon.image}
                            title={pokemon.name}
                            onRemove={() => this.props.removePokemon(pokemon)}
                        />
                    ))
                }
            </div>
        )
    }
}

export default PokemonList