import styles from './FunctionalyInfo.module.css';
import imageInfoQuestionario from '../assets/img/imageInfoQuestionario.svg';
import imageInfoSaudeMais from '../assets/img/imageInfoSaudeMais.svg';
import imageInfoForum from '../assets/img/imageInfoForum.svg';

export function FunctionalyInfo({ isDarkMode }) {
  return (
    <div className={`${styles.funcionalidades} ${isDarkMode ? styles.dark : styles.light}`}>
      <div className={styles.linhaInfo}></div>
      <div className={styles.infoQuestionario}>
        <div className={styles.imageInfo}>
          <img src={imageInfoQuestionario} alt="Imagem Questionário" />
        </div>
        <div className={styles.textInfo}>
          <h2>Anda exausto no trabalho?</h2>
          <h2>Sem energia pra realizar suas tarefas?</h2>
          <h2>Falta paciencia com colegas de trabalho?</h2>
          <p>
            Descubra se você tem sintomas do <strong>Burnout</strong> realizando
            nosso questionário super simples!
          </p>
        </div>
      </div>
      <div className={styles.linhaInfo}></div>
      <div className={styles.infoSaudeMais}>
        <div className={styles.textInfoSaudeMais}>
          <h2>Não sabe o que é Burnout?</h2>
          <h2>Quer saber mais sobre?</h2>
          <p>Conheça mais sobre esse tema importante na nossa área Saúde+.</p>
        </div>
        <div className={styles.imageInfo}>
          <img src={imageInfoSaudeMais} alt="Imagem Saúde+" />
        </div>
      </div>

      <div className={styles.linhaInfo}></div>

      <div className={styles.infoForum}>
        <div className={styles.imageInfo}>
          <img src={imageInfoForum} alt="Imagem Fórum" />
        </div>
        <div className={styles.textInfo}>
          <h2>Deseja Compartilhar sua opinião sobre Burnout?</h2>
          <h2>Expressar suas frustrações de forma <strong>anônima</strong>?</h2>
          <h2>Quer saber se sua experiência não é única?</h2>
          <p>
            Acesse nosso fórum anônimo e compartilhe suas frustrações e comente
            com outros semelhantes!
          </p>
        </div>
      </div>
    </div>
  );
}