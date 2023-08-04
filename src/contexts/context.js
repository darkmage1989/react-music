import { createContext, useContext } from 'react'
export const themeClass = {
  dark: 'dark__theme',
  light: 'light__theme'
}
export const ThemeContext = createContext(themeClass)
export const useThemeContext = () => {
  const theme = useContext(ThemeContext)
  return theme
}
