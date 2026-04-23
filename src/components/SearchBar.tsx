interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedType: string
  setSelectedType: (type: string) => void
  pokemonTypes: string[]
}

const SearchBar = ({ searchTerm, setSearchTerm, selectedType, setSelectedType, pokemonTypes }: SearchBarProps) => {
    return (
        <div className="search-bar">
        <input
            className="input-field"
            type="text"
            placeholder="Search Pokémon..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
            className="input-field"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
        >
            <option value="">All Types</option>
            {pokemonTypes.map((type, i) => (
                <option key={i} value={type}>{type}</option>
            ))}
        </select>
        </div>
    )
}

export default SearchBar