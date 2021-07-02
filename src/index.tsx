import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { CvProvider } from './contexts/CvContext'
import { AlertProvider } from './contexts/AlertContext'

ReactDOM.render(
  <React.StrictMode>
    <CvProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </CvProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
