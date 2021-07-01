import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import HomePage from './pages/HomePage'
import CvPage from './pages/CvPage'
import { Router } from '@reach/router'
import Header from './components/Header'

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Router>
        <HomePage path="/" />
        <CvPage path="/cv" />
      </Router>
    </>
  )
}

export default App
