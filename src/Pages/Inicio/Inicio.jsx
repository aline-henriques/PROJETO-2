import React, { useState } from 'react';
import styles from './Inicio.module.css'
import { Header } from '../../Layouts/Header/Header.jsx'
import { PrincipalContent } from '../../Components/Contrudo Principal/PrincipalContent.jsx'
import { FunctionalyInfo } from '../../Components/Funcionalidades/FunctionalyInfo.jsx';
import { Footer } from '../../Layouts/Footer/Footer.jsx';

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
