import React from 'react'
import PokemonImage from './PokemonImage'
import Button from './Button'
import Input from './Input'

const styles = {
    input: {
        margin: '12px 0'
    },
    button: {
        margin: '12px 0'
    },
    buttonSmall: {
        width: 'auto'
    },
    image: {
        height: 84,
        width: 'auto',
        margin: '24px 0'
    }
}

class PokemonForm extends React.Component {
    render() {
        const {
            randomize,
            onInputChange,
            image,
            onSubmit,
            inputValue,
            shouldDisableSubmit
        } = this.props

        return (
            <form className="pokemon-form">
                <PokemonImage style={styles.image} image={image}/>

                <Button
                    style={{...styles.button, ...styles.buttonSmall}}
                    onClick={randomize}>
                    Show random
                </Button>

                <Input
                    style={styles.input}
                    type="text"
                    placeholder="Enter Pokemon name"
                    value={inputValue}
                    onChange={onInputChange}/>

                <Button
                    style={styles.button}
                    onClick={onSubmit}
                    disabled={shouldDisableSubmit}>
                    Add to Pokedex
                </Button>
            </form>
        )
    }
}

export default PokemonForm