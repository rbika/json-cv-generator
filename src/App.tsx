import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { Router } from '@reach/router'

import HomePage from './pages/HomePage'
import CvPage from './pages/CvPage'
import Header from './components/Header'
import Alert from './components/Alert'

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Alert />
      <Router>
        <HomePage path="/" />
        <CvPage path="/cv" />
      </Router>
    </>
  )
}

export default App
