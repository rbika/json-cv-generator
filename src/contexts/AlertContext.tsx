import * as React from 'react'

import { IAlert } from '../types/alert'

interface IAlertContext {
  alert: IAlert | null
  setAlert: React.Dispatch<React.SetStateAction<IAlert | null>>
}

interface AlertProviderProps {
  children: React.ReactNode
}

const AlertContext = React.createContext<IAlertContext | undefined>(undefined)

function AlertProvider({ children }: AlertProviderProps) {
  const [alert, setAlert] = React.useState<IAlert | null>(null)
  const value = { alert, setAlert }

  console.log(alert)

  return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
}

function useAlert() {
  const context = React.useContext(AlertContext)

  if (context === undefined) {
    throw new Error('useAlert must be used within a AlertProvider')
  }

  return context
}

export { AlertProvider, useAlert }
