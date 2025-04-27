import styles from './Footer.module.css';
import askHelpImage from '../assets/img/buttonAskHelp.svg';
import knowUsImage from '../assets/img/buttonKnowUs.svg';
import notAloneImage from '../assets/img/buttonNotAlone.svg';

export function Footer({isDarkMode}) {
  return (
    <footer className={`${styles.bottomContent} ${isDarkMode ? styles.dark : styles.light}`}>
      <div className={styles.bottomActions}>
        <div className={styles.notAlone}>
          <img src={notAloneImage} alt="Não está sozinho" />
          Você não está sozinho
        </div>

        <div className={styles.askHelp}>
          <img src={askHelpImage} alt="Peça ajuda" />
          Peça ajuda!
        </div>

        <div className={styles.knowUs}>
          <img src={knowUsImage} alt="Conheça nossa iniciativa" />
          Conheça já nossa iniciativa
        </div>
      </div>
      <button className={styles.buttonConheca}>CONHEÇA MAIS</button>
    </footer>
  );
}
