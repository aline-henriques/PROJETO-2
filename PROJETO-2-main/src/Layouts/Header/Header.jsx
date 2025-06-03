import styles from './Header.module.css'
import logoHeader from '../../assets/img/DEI-TILT-LOGO.svg'
import temaHeader from '../../assets/img/TEMA-BUTTON.svg'
import imgPerfil from '../../assets/img/Foto_perfil.jpg'
import React from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';
import { useAuth } from '../../Services/AuthContext';
import { useLocation } from 'react-router-dom';

export function Header({onToggleColors,isDarkMode}) {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  
  const { user , isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
        logout();  
        navigate('/');  
    };
  
  const handleCadastro = () => {
      navigate ('/cadastro')
  }

  return (
    <div className={isDarkMode ? styles.dark : styles.light}>
    <div className={styles.header}>
        <img src={logoHeader} alt="" className={styles.logoHeader}/>
       
        <div className={styles.navbar}>
            <NavLink to="/">Início</NavLink>
            <NavLink to="/forum" title='Forum'>Fórum</NavLink>
            <NavLink to="/questionario" title='Questionario'>Questionários</NavLink>
            <NavLink to="/saude" title='Saúde+'>+Saúde</NavLink>

            <div className={styles.linhaVertical}></div>

            <button onClick={onToggleColors}>
              <img src={temaHeader} alt="" className={styles.temaHeader}/>
            </button>  


              {!isAuthenticated && (
                <>
                  <NavLink to="/Login">Login</NavLink>
                  <button onClick={handleCadastro} className={styles.cadastro}>Cadastre-se</button>
                </>
              )}

              {isAuthenticated && (
                <>
                  <p>Olá, {user.nome}!</p>
                  <div className={styles.menuSide}>
                    <div className={styles.cadastro}><img src={user.avatarUrl} alt='Foto Perfil' className={styles.fotoPerfil}></img></div>
                    <div className={styles.dropdownMenu}>
                      <NavLink to='/perfil' title='Perfil'><span className={styles.textMenuDrop}>Editar Perfil</span></NavLink>
                      <div className={styles.linha}></div>
                        <NavLink to='/acompanhamentoEmocional' title='acompanhamentoEmocional'><span className={styles.textMenuDrop}>Acompanhamento</span></NavLink>
                      <div className={styles.linha}></div>
                      <button onClick={handleLogout}><span className={styles.textMenuDrop}>Sair</span></button>
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