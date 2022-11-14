import Theme from '@components/Theme'
import Test from '@pages/Test'
import ErrorBoundary from '@pages/ErrorBoundary'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Theme>
          <Test />
        </Theme>
      </ErrorBoundary>
    </div>
  )
}

export default App
