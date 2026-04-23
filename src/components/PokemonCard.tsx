import type { Pokemon } from "../types"

interface PokemonCardProps {
    pokemon: Pokemon
}

const PokemonCard = (props: PokemonCardProps) => {
    const { pokemon } = props
    const displayName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    return (
        <div key={pokemon.name} className="pokemon-card">
          <h2>{displayName}</h2>
          <img src={pokemon.image_url} alt={pokemon.name} />
          <p>Types: {pokemon.types.join(', ')}</p>
        </div>
    )
}

export default PokemonCard