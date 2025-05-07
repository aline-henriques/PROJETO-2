import { Header } from './Header';
import styles from './Saude.module.css';
import { useState } from 'react';

export function Saude(){
    const [darkMode, setDarkMode] = useState(false);
    const toggleColors = () => setDarkMode((prev) => !prev);

    return(
        <div className={`${styles.container} ${styles.withFooter} ${darkMode ? styles.dark : styles.light}`}>
            <Header  onToggleColors={toggleColors} isDarkMode={darkMode}  />

            <section className={styles.heroSection}>
                    <h1>Saúde+</h1>
                    <p>O que a ciência descobriu recentemente? Conheça mais sobre o assunto em nossa página +Saúde.</p>
            </section>

        </div>
    )
}