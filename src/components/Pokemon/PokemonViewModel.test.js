import faker from 'faker'
import PokemonViewModel from './PokemonViewModel'

describe('PokemonViewModel', () => {
    let storeMock = null
    let viewModel = null
    let pokemonMock = {
        name: faker.name.firstName
    }

    beforeEach(() => {
        storeMock = {
            getPokemons() {},
            addPokemon() {},
            removePokemon() {}
        }

        viewModel = new PokemonViewModel(storeMock)
    })

    afterEach(() => {
        jest.resetAllMocks()
    })

    it('should call getPokemons()', () => {
        const spy = jest.spyOn(storeMock, 'getPokemons')
        viewModel.getPokemons()

        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveReturned()
    })

    it('should call addPokemon() with passed param', () => {
        const spy = jest.spyOn(storeMock, 'addPokemon')
        viewModel.addPokemon(pokemonMock)

        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(pokemonMock)
    })

    it('should call removePokemon() with passed param', () => {
        const spy = jest.spyOn(storeMock, 'removePokemon')
        viewModel.removePokemon(pokemonMock)

        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(pokemonMock)
    })
})