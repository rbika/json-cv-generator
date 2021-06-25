import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.css'
import Home from './pages/HomePage'
import Resume from './pages/ResumePage'
import { Router } from '@reach/router'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Home path="/" />
        <Resume path="/cv" />
      </Router>
    </>
  )
}

export default App
