import styles from './Header.module.css'

import logoHeader from '../assets/img/DEI-TILT-LOGO.svg'
import temaHeader from '../assets/img/TEMA-BUTTON.svg'
import React from 'react';



export function Header({onToggleColors,isDarkMode}) {
  return (
    <div className={isDarkMode ? styles.dark : styles.light}>
    <div className={styles.header}>
        <img src={logoHeader} alt="" />
       
        <div className={styles.navbar}>
            <a href="#">Início</a>
            <a href="#">Fórum</a>
            <a href="#">Questionários</a>
            <a href="#">+Saúde</a>

            <div className={styles.linhaVertical}></div>

            <button onClick={onToggleColors}>
              <img src={temaHeader} alt="" />
            </button>  

            <a href="#">Login</a>
            <a href="#"><strong className={styles.cadastro}>Cadastre-se</strong></a>
            
        </div>
    </div>
      <div className={styles.linha}></div>
    </div>
    
  );
}