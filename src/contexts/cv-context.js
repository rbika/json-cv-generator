import * as React from 'react'

const CvContext = React.createContext()

function CvProvider({ children }) {
  const [cv, setCv] = React.useState()
  const value = { cv, setCv }

  return <CvContext.Provider value={value}>{children}</CvContext.Provider>
}

function useCv() {
  const context = React.useContext(CvContext)

  if (context === undefined) {
    throw new Error('useCv must be used within a CvProvider')
  }

  return context
}

export { CvProvider, useCv }
