import styles from './FunctionalyInfo.module.css';
import imageInfoQuestionario from '../../assets/img/imageInfoQuestionario.svg';
import imageInfoSaudeMais from '../../assets/img/imageInfoSaudeMais.svg';
import imageInfoForum from '../../assets/img/imageInfoForum.svg';

export function FunctionalyInfo({ isDarkMode }) {
  return (
    <div className={`${styles.funcionalidades} ${isDarkMode ? styles.dark : styles.light}`}>
      <div className={styles.linhaInfo}></div>
      <div className={styles.infoQuestionario}>
        <div className={styles.imageInfo}>
          <img src={imageInfoQuestionario} alt="Imagem Questionário" />
        </div>
        <div className={styles.textInfo}>
          <h2>Se sente exausto no trabalho?</h2>
          <h2>Sem energia para realizar suas tarefas?</h2>
          <h2>Falta de paciência com colegas de trabalho?</h2>
          <p>
            Descubra se você tem sintomas de <strong>Burnout</strong> realizando
            nosso questionário!
          </p>
        </div>
      </div>
      <div className={styles.linhaInfo}></div>
      <div className={styles.infoSaudeMais}>
        <div className={styles.textInfoSaudeMais}>
          <h2>Não sabe o que é Burnout?</h2>
          <h2>Quer conhecer mais sobre?</h2>
          <p>Conheça sobre o tema na nossa área Saúde+.</p>
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
          <h2>Deseja compartilhar suas experiências sobre Burnout?</h2>
          <h2>Expressar suas frustrações de forma <strong>anônima</strong>?</h2>
          <h2>Quer descobrir se sua experiência não é única?</h2>
          <p>
            Acesse nosso fórum anônimo e compartilhe suas frustrações!
          </p>
        </div>
      </div>
    </div>
  );
}