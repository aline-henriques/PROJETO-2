import styles from './Footer.module.css';
import askHelpImage from '../../assets/img/buttonAskHelp.svg';
import knowUsImage from '../../assets/img/buttonKnowUs.svg';
import notAloneImage from '../../assets/img/buttonNotAlone.svg';
import { useAuth } from '../../Services/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Footer({isDarkMode}) {
  
  //autenticação
  const { isAuthenticated } = useAuth();
  //navegação
  const navigate = useNavigate();

  return (
    <footer className={`${styles.bottomContent} ${isDarkMode ? styles.dark : styles.light}`}>
      <div className={styles.bottomActions}>
        <div className={styles.notAlone}>
          <img src={notAloneImage} alt="Não está sozinho" />
          Você não está sozinho!
        </div>

        <div className={styles.askHelp}>
          <img src={askHelpImage} alt="Peça ajuda" />
          Peça ajuda!
        </div>

        <div className={styles.knowUs}>
          <img src={knowUsImage} alt="Conheça nossa iniciativa" />
          Conheça nossa iniciativa.
        </div>
  
       <button
          onClick={() => navigate(isAuthenticated ? '/cadastro' : '/saude')}
          className={styles.buttonConheca}
        >
          <span>CONHEÇA MAIS</span>
        </button>
      </div>
      
    </footer>
  );
}
