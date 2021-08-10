import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useStorage } from '../hook/useStorage'

type IThemeProviderProps = {
  children: React.ReactNode
}
type Theme = 'light' | 'dark'
type IThemeContext = {
  isDark: boolean
  toggle: () => void
}
export const ThemeContext = createContext({} as IThemeContext)

export function ThemeProvider({ children }: IThemeProviderProps) {
  const [theme, setThemeStored] = useStorage<Theme>('@theme', 'light')
  useEffect(() => {
    if (theme === 'light') {
      document.getElementsByTagName('body')[0].className = 'light'
    } else {
      document.getElementsByTagName('body')[0].className = 'dark'
    }
  }, [theme])

  function toggle() {
    console.log('toggle')
    setThemeStored(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider
      value={{
        toggle,
        isDark: theme === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
