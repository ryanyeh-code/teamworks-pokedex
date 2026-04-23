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
│   ├── pokemonCard.tsx
│   ├── pokemonContainer.tsx
│   └── searchBar.tsx
├── hooks/
│   └── usePokemon.tsx
├── types/
│   └── types.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
