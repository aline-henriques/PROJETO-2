import styles from './Header.module.css'

import logoHeader from '../assets/img/DEI-TILT-LOGO.svg'
import temaHeader from '../assets/img/TEMA-BUTTON.svg'

export function Header() {
  return (
    <div className={styles.header}>
        <img src={logoHeader} alt="" />
       
        <div className={styles.navbar}>
            <a href="#">Início</a>
            <a href="#">Fórum</a>
            <a href="#">Questionários</a>
            <a href="#">+Saúde</a>

            <div className={styles.linhaVertical}></div>

            <button><img src={temaHeader} alt="" /></button>  
            <a href="#">Login</a>
            <a href="#"><strong className={styles.cadastro}>Cadastre-se</strong></a>
            
        </div>
    </div>
  )
}