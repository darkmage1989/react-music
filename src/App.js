import { AppRoutes } from './routes'
import styles from './App.module.css'
import { ThemeContext, themeClass } from './contexts/context'
import { useState } from 'react'
function App() {
  const [currentTheme, setcurrentTheme] = useState(themeClass.dark)
  const toogleTheme = () => {
    if (currentTheme === themeClass.dark) {
      setcurrentTheme(themeClass.light)
      return
    }
    setcurrentTheme(themeClass.dark)
  }

  return (
    <div className={styles.wrapper}>
      <ThemeContext.Provider value={{ theme: currentTheme, toogleTheme }}>
        <AppRoutes />
      </ThemeContext.Provider>
    </div>
  )
}
export default App
