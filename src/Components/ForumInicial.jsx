import { useState } from 'react';
import { Header } from './Header';
import styles from './ForumInicial.module.css'

export function ForumInicial (){
    
    const [darkMode, setDarkMode] = useState(false);
    const toggleColors = () => setDarkMode((prev) => !prev);
    
    return( 
        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`} >
             <Header onToggleColors={toggleColors} isDarkMode={darkMode} />
            <div className={styles.introduction}>
                <h1>Forúm anônimo</h1>
                <p>Local destinado a compartilhar e descobrir experiêscias sobre o burnout</p>
                <button className={styles.buttonNewPost}>Novo Post</button>
            </div>
        </div>
        
    );
}