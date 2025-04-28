import React, { useState } from 'react';
import styles from './Inicio.module.css'
import { Header } from './Header.jsx'
import { PrincipalContent } from './PrincipalContent.jsx'
import { FunctionalyInfo } from './FunctionalyInfo.jsx';
import { Footer } from './Footer.jsx';

export function Inicio() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleColors = () => setDarkMode((prev) => !prev);

  return (
    // Aplicando a classe condicional para modo claro ou escuro
    <div className={`${styles.container} ${styles.withFooter} ${darkMode ? styles.dark : styles.light}`}>
        <Header onToggleColors={toggleColors} isDarkMode={darkMode} />

        <PrincipalContent isDarkMode={darkMode} />

        <FunctionalyInfo isDarkMode={darkMode} />

        <Footer isDarkMode={darkMode} />


    </div>
  )
}
