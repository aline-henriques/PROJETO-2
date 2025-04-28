import styles from './Header.module.css'
import logoHeader from '../assets/img/DEI-TILT-LOGO.svg'
import temaHeader from '../assets/img/TEMA-BUTTON.svg'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext';



export function Header({onToggleColors,isDarkMode}) {

  const { isAuthenticated } = useAuth();

  return (
    <div className={isDarkMode ? styles.dark : styles.light}>
    <div className={styles.header}>
        <img src={logoHeader} alt="" />
       
        <div className={styles.navbar}>
            <NavLink to="/">Início</NavLink>
            <NavLink toto="#">Fórum</NavLink>
            <NavLink to="/Questionario" title='Questionario'>Questionários</NavLink>
            <NavLink to="#">+Saúde</NavLink>

            <div className={styles.linhaVertical}></div>

            <button onClick={onToggleColors}>
              <img src={temaHeader} alt="" />
            </button>  


              {!isAuthenticated && (
                <>
                  <NavLink to="/login">Login</NavLink>
                  <button className={styles.cadastro}>Cadastre-se</button>
                </>
              )}

              {isAuthenticated && (
                <>
                  <>Olá, Bruno!</>
                  <button className={styles.cadastro}>Perfil</button>
                </>
              )}

        </div>
    </div>
      <div className={styles.linha}></div>
    </div>
    
  );
}