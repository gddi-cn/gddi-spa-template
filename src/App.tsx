import Theme from '@components/Theme'
import ErrorBoundary from '@pages/ErrorBoundary'
import Router from '@/router'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Theme>
          <Router />
        </Theme>
      </ErrorBoundary>
    </div>
  )
}

export default App
