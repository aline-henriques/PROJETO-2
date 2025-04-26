import styles from './App.module.css'
import { Header } from './Components/Header'
import logoContent from './assets/img/logoContent1.svg'
import askHelpImage from './assets/img/buttonAskHelp.svg'
import knowUsImage from './assets/img/buttonKnowUs.svg'
import notAloneImage from './assets/img/buttonNotAlone.svg'
import imageInfoQuestionario from './assets/img/imageInfoQuestionario.svg'
import imageInfoSaudeMais from './assets/img/imageInfoSaudeMais.svg'
import imageInfoForum from './assets/img/imageInfoForum.svg'
import { useState } from 'react'




export function App() {

  const [darkMode, setDarkMode] = useState(false);

  // setando uma vareavel para receber a função de alterar a cor
  const toggleColors = () => setDarkMode((prev) => !prev)
  

  return (
    <div className={`${styles.container} ${styles.withFooter} ${darkMode ? styles.dark : styles.light}`}>

      <Header onToggleColors = {toggleColors} isDarkMode = {darkMode}/>

      <main className={styles.effectPhrase} >

        <div className={styles.text}>

          <h1>Paz.</h1>
          <h1>Energia.</h1>
          <h1>Restauração.</h1>
          <p>Recupere sua energia e renove sua mente.</p>
          <p>Coloque a paz e equilíbrio em prioridade!</p>

          <div className={styles.buttons}>

            <button className={styles.buttonEntrar}>ENTRAR</button>
            <button className={styles.buttonCadastrar}>CADASTRAR-SE</button>

          </div>

        </div>

        <div className={styles.image}>  

          <img src={logoContent} alt="imagem chamativa da logo" />

        </div>

      </main>

      <div className={styles.linhaInfo}></div>

      <div className={styles.funcionalidades}>
        <div className={styles.infoQuestionario}>
          <div className={styles.imageInfo}>

            <img src={imageInfoQuestionario} alt="" />

          </div>
          <div className={styles.textInfo}>

            <h2>Anda exausto no trabalho?</h2>
            <h2>Sem energia pra realizar suas tarefas?</h2>
            <h2>Falta paciencia com colegas de trabalho?</h2>
            <p>Descubra se você tem sintomas do <strong>Burnout</strong> realizando nosso questionario super simples!</p>

          </div>
       
        </div>
        <div className={styles.linhaInfo}></div>    
        <div className={styles.infoSaudeMais}>

            <div className={styles.textInfoSaudeMais}>

                <h2>Não sabe o que é Burnout?</h2>
                <h2>Quer saber mais sobre ?</h2>
                <p>Conheça mais sobre esse tema importante na nossa area Saúde+.</p>

            </div>
            <div className={styles.imageInfo}>

                <img src={imageInfoSaudeMais} alt="" />

            </div>
        </div>
        <div className={styles.linhaInfo}></div>
        <div className={styles.infoForum}>
          
          <div className={styles.imageInfo}>

              <img src={imageInfoForum} alt="" />

          </div>
          <div className={styles.textInfo}>

            <h2>Deseja Compartilhar sua opinião sobre Burnout?</h2>
            <h2>Expressar suas frustrações de forma <strong>anonima</strong>?</h2>
            <h2>Quer saber se sua experiencia não é unica?</h2>
            <p>Acesse nosso fórum anônimo e compartilhe suas frustrações e comente com outros semelhantes!</p>
          </div>
        </div> 
        
      </div>
      
    
      
      <footer className={styles.bottomContent}>
        <div className={styles.bottomActions}>
         
          <div className={styles.notAlone}> <img src={notAloneImage} alt="" />Você não está sozinho</div>
          
          <div className={styles.askHelp}><img src={askHelpImage} alt="" />Peça ajuda!</div>
          
          <div className={styles.knowUs}> <img src={knowUsImage} alt="" /> Conheça já nossa iniciativa</div>
        </div>
        <button className={styles.buttonConheca}>CONHEÇA MAIS</button>
      </footer> 
      
    </div>
  )
}
