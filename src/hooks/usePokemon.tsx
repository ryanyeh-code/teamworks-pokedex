import type { Pokemon } from "../types"

export const usePokemon = async() => {
    const pokemonList: Pokemon[] = []
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        const data = await response.json()

        await Promise.all(
            data.results.map(async (pokemon:any) => {
                const res = await fetch(pokemon.url)
                const pokemonData = await res.json()
                pokemonList.push({
                    name: pokemonData.name,
                    image_url: pokemonData.sprites.front_default,
                    types: pokemonData.types.map((type:any) => type.type.name)
                })
            })
        )

        return pokemonList
    } catch (error) {
        console.log(error)
        return pokemonList
    }
}

export const usePokemonTypes = async() => {
    const pokemonTypes: string[] = []
    try {
        const response = await fetch('https://pokeapi.co/api/v2/type')
        const data = await response.json()

        data.results.forEach((type:any) => {
            pokemonTypes.push(type.name)
        })

        return pokemonTypes
    } catch (error) {
        console.log(error)
        return pokemonTypes
    }
}