import * as React from 'react'
import { ICv } from '../types/cv'

interface ICvContext {
  cv: ICv | null
  setCv: React.Dispatch<React.SetStateAction<ICv | null>>
}

interface CvProviderProps {
  children: React.ReactNode
}

const CvContext = React.createContext<ICvContext | undefined>(undefined)

function CvProvider({ children }: CvProviderProps) {
  const [cv, setCv] = React.useState<ICv | null>(null)
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
