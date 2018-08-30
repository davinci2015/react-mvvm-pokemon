import React from 'react'

class PokemonImage extends React.Component {
    render() {
        return this.props.image
            ? <img
                style={this.props.style}
                src={require(`../../../res/images/${this.props.image}`)}
                alt="Pokemon"/>
            : null
    }
}

export default PokemonImage