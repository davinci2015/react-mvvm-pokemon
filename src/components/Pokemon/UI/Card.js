import React from 'react'
import PokemonImage from './PokemonImage'

class Card extends React.Component {
    render() {
        const { image, title, style, onRemove } = this.props

        return (
            <div className="card" style={style}>
                <div className="card__content">
                    <PokemonImage style={{height: 80}} image={image}/>
                    <span className="card__title">{title}</span>
                    <button onClick={onRemove} className="card__btn">✕</button>
                </div>
            </div>
        )
    }
}

export default Card