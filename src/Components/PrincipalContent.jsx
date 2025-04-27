import styles from './PrincipalContent.module.css'
import logoContent from '../assets/img/LogoContent1.svg'

export function PrincipalContent({isDarkMode}){
    return (
        <main className={`${styles.effectPhrase} ${isDarkMode ? styles.dark : styles.light}`}>
          <div className={styles.text}>
            <h1>Paz.</h1>
            <h1>Energia.</h1>
            <h1>Restauração.</h1>
            <p>Recupere sua energia e renove sua mente.</p>
            <p>Coloque a paz e equilíbrio em prioridade!</p>
            <div className={styles.buttons}>
              <button className={styles.buttonEntrar}>Entrar</button>
              <button className={styles.buttonCadastrar}>Cadastre-se</button>
            </div>
          </div>
    
          <div className={styles.image}>
            <img src={logoContent} alt="imagem chamativa da logo" />
          </div>
        </main>
      );
    
}