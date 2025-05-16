import styles from './PrincipalContent.module.css'
import logoContent from '../../assets/img/LogoContent1.svg'
import { useAuth } from '../../Services/AuthContext';

export function PrincipalContent({isDarkMode}){
  const { isAuthenticated } = useAuth();
  return (
      <main className={`${styles.effectPhrase} ${isDarkMode ? styles.dark : styles.light}`}>
        <div className={styles.text}>
          <h1>Paz.</h1>
          <h1>Energia.</h1>
          <h1>Restauração.</h1>
          <p>Recupere sua energia e renove sua mente.</p>
          <p>Coloque a paz e equilíbrio em prioridade!</p>
          <div className={styles.buttons}>
          {!isAuthenticated && (
              <>
                <button className={styles.buttonEntrar}>ENTRAR</button>
                <button className={styles.buttonCadastrar}>CADASTRE-SE</button>
              </>
            )}
            
          </div>
        </div>
  
        <div className={styles.image}>
          <img src={logoContent} alt="imagem chamativa da logo" />
        </div>
      </main>
    );
    
}