import type { Pokemon } from "../types"
import PokemonCard from "./PokemonCard"

interface PokemonContainerProps {
    pokemonData: Pokemon[]
}

const PokemonContainer = (props: PokemonContainerProps) => {
    const { pokemonData } = props
    return (
        <>
            <h1>Pokemon</h1>
            <div className="pokemon-container">
                {pokemonData.map((pokemon: Pokemon, i: number) => (
                    <PokemonCard key={i} pokemon={pokemon} />
                ))}
            </div>
        </>
    )
}

export default PokemonContainer