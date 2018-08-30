import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import PokemonProvider from './components/Pokemon/PokemonProvider'
import RootStore from './models/RootStore'

const rootStore = new RootStore()

class App extends Component {
    render() {
        return (
            <Provider {...rootStore.getStores()}>
                <PokemonProvider/>
            </Provider>
        )
    }
}

export default App
