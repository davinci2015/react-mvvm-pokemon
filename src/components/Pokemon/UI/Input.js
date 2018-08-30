import React from 'react'

class Input extends React.Component {
    render() {
        const { placeholder, value, onChange, style } = this.props

        return (
            <input
                className="input"
                style={style}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}/>
        )
    }
}

export default Input