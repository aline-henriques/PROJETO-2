import styles from './Header.module.css'
import logoHeader from '../assets/img/DEI-TILT-LOGO.svg'
import temaHeader from '../assets/img/TEMA-BUTTON.svg'
import imgPerfil from '../assets/img/Foto_perfil.jpg'
import React from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useLocation } from 'react-router-dom';

export function Header({onToggleColors,isDarkMode}) {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate(from, { replace: false });
        logout();  
        navigate('/');  
    };

  return (
    <div className={isDarkMode ? styles.dark : styles.light}>
    <div className={styles.header}>
        <img src={logoHeader} alt="" className={styles.logoHeader}/>
       
        <div className={styles.navbar}>
            <NavLink to="/">Início</NavLink>
            <NavLink to="/Forum" title='Forum'>Fórum</NavLink>
            <NavLink to="/Questionario" title='Questionario'>Questionários</NavLink>
            <NavLink to="/Saude" title='Saúde+'>+Saúde</NavLink>

            <div className={styles.linhaVertical}></div>

            <button onClick={onToggleColors}>
              <img src={temaHeader} alt="" className={styles.temaHeader}/>
            </button>  


              {!isAuthenticated && (
                <>
                  <NavLink to="/login">Login</NavLink>
                  <button className={styles.cadastro}>Cadastre-se</button>
                </>
              )}

              {isAuthenticated && (
                <>
                  <p>Olá, Danilo!</p>
                  <div className={styles.menuSide}>
                    <div className={styles.cadastro}><img src={imgPerfil} alt='Foto Perfil' className={styles.fotoPerfil}></img></div>
                    <div className={styles.dropdownMenu}>
                      <NavLink to="*"><span className={styles.textMenuDrop}>Meu Perfil</span></NavLink>
                      <div className={styles.linha}></div>
                      <NavLink onClick={handleLogout}><span className={styles.textMenuDrop}>Logout</span></NavLink>
                    </div>
                  </div>
                </>
              )}

        </div>
    </div>
      <div className={styles.linha}></div>
    </div>
    
  );
}