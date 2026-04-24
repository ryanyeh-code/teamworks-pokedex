import { useState, useEffect } from 'react'

import './App.css'
import { fetchPokemon, fetchPokemonTypes } from './hooks/usePokemon'
import type { Pokemon } from './types'
import PokemonContainer from './components/PokemonContainer'
import SearchBar from './components/SearchBar'

function App() {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([])
  const [pokemonTypes, setPokemonTypes] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [displayPokemon, setDisplayPokemon] = useState<Pokemon[]>([])

  useEffect(() => {
    const loadPokemon = async () => {
      const data = await fetchPokemon()
      setAllPokemon(data)
      setDisplayPokemon(data)
    }

    const loadPokemonTypes = async () => {
      const types = await fetchPokemonTypes()
      setPokemonTypes(types)
    }

    const fetchData = async () => {
      setIsLoading(true)
      await Promise.all([loadPokemon(), loadPokemonTypes()])
      setIsLoading(false)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const handler = window.setTimeout(() => {
      let filtered = allPokemon

      if (searchTerm) {
        filtered = filtered.filter(pokemon =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }

      if (selectedType) {
        filtered = filtered.filter(pokemon =>
          pokemon.types.includes(selectedType)
        )
      }

      setDisplayPokemon(filtered)
    }, 300)

    return () => {
      window.clearTimeout(handler)
    }
  }, [searchTerm, selectedType, allPokemon])


  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        pokemonTypes={pokemonTypes}
      />
      <PokemonContainer pokemonData={displayPokemon} />
    </>
  )
}

export default App
