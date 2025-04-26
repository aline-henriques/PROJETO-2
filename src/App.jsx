import styles from './App.module.css'
import { Header } from './Components/Header'
import logoContent from './assets/img/logoContent1.svg'
import askHelpImage from './assets/img/buttonAskHelp.svg'
import knowUsImage from './assets/img/buttonKnowUs.svg'
import notAloneImage from './assets/img/buttonNotAlone.svg'
import { useState } from 'react'



export function App() {

  const [darkMode, setDarkMode] = useState(false);

  // setando uma vareavel para receber a função de alterar a cor
  const toggleColors = () => setDarkMode((prev) => !prev)
  

  return (
    <div className={`${styles.container}, ${darkMode ? styles.dark : styles.light}`}>
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
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
