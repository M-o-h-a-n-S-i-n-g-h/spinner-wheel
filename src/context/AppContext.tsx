import React, { createContext, useState } from 'react'

interface AppProviderProps {
  children: React.ReactNode
}

interface AppContextProps {
  state: InitialStateProps
  setState: React.Dispatch<React.SetStateAction<InitialStateProps>>
}

interface InitialStateProps {
  step: number
  wonReward: string
  coupon: string
  error: string
}

const AppContext = createContext<AppContextProps>({} as AppContextProps)

const initialState = {
  step: 1,
  wonReward: '',
  coupon: '',
  error: ''
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, setState] = useState<InitialStateProps>(initialState)

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

export const useAppContext = () => React.useContext(AppContext)
