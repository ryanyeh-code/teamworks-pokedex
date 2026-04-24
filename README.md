# Teamworks Pokedex

A modern, responsive Pokedex application built with React and TypeScript. Browse, search, and filter Pokemon from the first 151 generations using data from the PokeAPI.

## Features

- **Browse Pokemon**: View detailed information for the first 151 Pokemon
- **Search Functionality**: Search Pokemon by name with debounced input
- **Type Filtering**: Filter Pokemon by their types
- **Responsive Design**: Optimized for desktop and mobile devices
- **Fast Loading**: Efficient data fetching and caching

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **API**: PokeAPI (https://pokeapi.co/)
- **Error Handling**: React Error Boundary
- **Linting**: ESLint with TypeScript support

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/teamworks-pokedex.git
   cd teamworks-pokedex
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- **Search**: Type in the search bar to find Pokemon by name
- **Filter**: Use the dropdown to filter by Pokemon type
- **Browse**: Scroll through the list of Pokemon cards

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── PokemonCard.tsx
│   ├── PokemonContainer.tsx
│   └── SearchBar.tsx
├── hooks/
│   └── usePokemon.tsx
├── types/
│   └── types.ts
├── App.tsx
├── main.tsx
└── index.css
```

## API info
For info on the API visit this page: https://pokeapi.co/

## Decisions

### Data Loading Strategy
- Load all data upfront (151 Pokemon + 21 types) as it's a small dataset
- Enables fast client-side search and filtering
- For larger datasets (e.g., all generations), consider server-side handling
- Implemented via `useEffect` with empty dependencies

### Pokemon Selection
- Fetch first 151 Pokemon using simple ID range (1-151)
- Alternative: Use `/generation/1/` endpoint then fetch individual Pokemon
- Current approach is simpler and sufficient

### Component Architecture
- Split UI into separate components (`SearchBar`, `PokemonContainer`, `PokemonCard`)
- Keeps `App.tsx` focused on state management and prop passing

### API Integration
- Custom hooks (`usePokemon`, `usePokemonTypes`) for API calls
- Improves testability and reusability
- Uses native Fetch API for simplicity

### Error Handling
- Top-level `ErrorBoundary` for debugging and user experience
- Catches JavaScript errors with fallback UI

### Tech Stack Choices
- **Vite**: Fast development startup, minimal boilerplate
- **Fetch API**: Built-in, sufficient for simple API needs
- **No Backend**: PokeAPI provides all data, small dataset doesn't require caching
- **Native HTML Select**: Controlled input, no customization needed
- **react-error-boundary**: Easy implementation for error boundaries

## ToDos

### Features
- [ ] Add error page for API call failures
- [ ] Hide console errors in production, display in error page
- [ ] Add loading states for individual components
- [ ] Implement pagination for large Pokemon lists
- [ ] Add Pokemon detail modal/page

### Typing
- [ ] Define proper types for raw API responses (`pokemon` and `type`)
- [ ] Replace `any` types with specific interfaces
- [ ] Add type guards for API data validation

### Testing
- [ ] Unit tests for search and filter functionality
- [ ] Tests for initial Pokemon/types loading (with mocked API)
- [ ] Error handling tests for failed API calls
- [ ] Component integration tests

### Bugs
- [ ] Fix inconsistent Pokemon ordering on refresh
- [ ] Handle edge cases in search/filter combinations

### Cleanup
- [ ] Remove unused Vite boilerplate code
- [ ] Optimize bundle size and performance
- [ ] Add proper TypeScript strict mode settings
