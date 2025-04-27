import styles from './App.module.css'
import { Header } from './Components/Header'
import { PrincipalContent } from './Components/PrincipalContent'
import { useState } from 'react'
import { FunctionalyInfo } from './Components/FunctionalyInfo';
import { Footer } from './Components/Footer';




export function App() {

  const [darkMode, setDarkMode] = useState(false);

  // setando uma vareavel para receber a função de alterar a cor
  const toggleColors = () => setDarkMode((prev) => !prev)
  

  return (
    <div className={`${styles.container} ${styles.withFooter} ${darkMode ? styles.dark : styles.light}`}>

      <Header onToggleColors = {toggleColors} isDarkMode = {darkMode}/>
      
      <PrincipalContent isDarkMode = {darkMode}/>

      <FunctionalyInfo isDarkMode = {darkMode}/>

      <Footer isDarkMode = {darkMode}/>
      
      
    </div>
  )
}
