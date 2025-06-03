import styles from './PrincipalContent.module.css';
import logoContent from '../../assets/img/LogoContent1.svg';
import { useAuth } from '../../Services/AuthContext';
import { useNavigate } from 'react-router-dom';

export function PrincipalContent({ isDarkMode }) {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const handleCadastro = () => {
    navigate ('/cadastro')
  }

  const handleLogin = () => {
    navigate ('/login')
  }

  return (
    <div
      className={`${styles.mainConteudoPrincipal} ${
        isDarkMode ? styles.dark : styles.light
      }`}
    >
      <div className={styles.text}>
        <h1>Paz.</h1>
        <h1>Energia.</h1>
        <h1>Restauração.</h1>
        <p>Recupere sua energia e renove sua mente.</p>
        <p>Coloque a paz e equilíbrio em prioridade!</p>
        {!isAuthenticated && (
          <div className={styles.buttons}>
            <button onClick={handleLogin} className={styles.buttonEntrar}>ENTRAR</button>
            <button onClick={handleCadastro} className={styles.buttonCadastrar}>CADASTRE-SE</button>
          </div>
        )}
      </div>
      <div className={styles.image}>
        <img src={logoContent} alt="imagem chamativa da logo." />
      </div>
    </div>
  );
}