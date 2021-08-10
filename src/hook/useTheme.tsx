import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}
