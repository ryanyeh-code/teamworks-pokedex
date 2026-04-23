import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import type { FallbackProps } from 'react-error-boundary'
import './index.css'
import App from './App.tsx'

function ErrorFallback({ error }: FallbackProps) {
  const message =
    error instanceof Error ? error.message : String(error)

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{message}</pre>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
