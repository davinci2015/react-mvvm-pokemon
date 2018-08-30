import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import faker from 'faker'
import PokemonController from './PokemonController'

Enzyme.configure({ adapter: new Adapter() })

describe('PokemonController', () => {
    let viewModel = null
    let wrapper = null
    let randNumber = null
    let pokemonMock = {
        name: faker.name.firstName()
    }

    beforeEach(() => {
        viewModel = {
            addPokemon(pokemon) {},
            removePokemon(pokemon) {},
            getPokemons() {}
        }
        
        randNumber = faker.random.number()
        global.Math.random = jest.fn().mockImplementation(() => randNumber)
        global.Math.ceil = jest.fn().mockImplementation(n => n)

        wrapper = Enzyme.shallow(<PokemonController viewModel={viewModel}/>)
    })

    afterEach(() => {
        jest.resetAllMocks()
    }) 

    it('should set random pokemon image in the component state', () => {
        wrapper.instance().setRandomPokemonImage()
        expect(wrapper.state().pokemonImage).toBe(`${randNumber * 10}.gif`)
    })

    it('should set pokemon name in the component state', () => {
        const mock = faker.lorem.word()
        const e = { target: { value: mock }}

        wrapper.instance().setPokemonName(e)
        expect(wrapper.state().pokemonName).toBe(mock)
    })

    it('should clear pokemon name in the component state', () => {
        wrapper.instance().clearPokemonName()
        expect(wrapper.state().pokemonName).toBe('')
    })

    it('should call addPokemon method from the viewModel with valid params', () => {
        const spy = jest.spyOn(viewModel, 'addPokemon')
        wrapper.instance().savePokemon()

        expect(spy).toHaveBeenCalledWith({
            image: wrapper.state().pokemonImage,
            name: wrapper.state().pokemonName
        })
    })

    it('should save Pokemon and clear Pokemon name from state', () => {
        const spySave = jest.spyOn(wrapper.instance(), 'savePokemon')
        const spyClear = jest.spyOn(wrapper.instance(), 'clearPokemonName')

        wrapper.instance().addPokemon()

        expect(spySave).toHaveBeenCalled()
        expect(spyClear).toHaveBeenCalled()
    })

    it('should remove Pokemon', () => {
        const spy = jest.spyOn(viewModel, 'removePokemon')
        wrapper.instance().removePokemon(pokemonMock)

        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(pokemonMock)
    })
})