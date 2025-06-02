import styles from '../Diretrizes/Diretrizes.module.css'
import { Header } from "../../Layouts/Header/Header"
import { Scroll, Handshake, LockKey, Warning } from "@phosphor-icons/react";
import { useState} from 'react';

export function Diretrizes () {
    // DarkMode
    const [darkMode, setDarkMode] = useState(false);
    const toggleColors = () => setDarkMode((prev) => !prev);

    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
            
            < Header onToggleColors={toggleColors} isDarkMode={darkMode} />

            <main className={styles.mainDiretrizes}>
                <div className={styles.title}>
                    <Scroll size={45} color='grey' weight='fill' />
                    <div className={styles.linhaVertical}>.</div>
                    <h2>Diretrizes de Comunidade e Segurança</h2>
                </div>
                <div className={styles.aviso}> 
                    <p>Siga as  diretrizes para manter nossa plataforma segura e acolhedora para todos! </p>
                </div>
                <div className={styles.regras}>
                    <div className={styles.sejaRespeitoso}>
                        <Handshake className={styles.icons} size={75}/>
                        <h3> Seja Respeitoso </h3>
                        <p>Trate os outros usuários com respeito. Não compactuamos  discriminação ou discurso de ódio em nossa plataforma.</p>
                    </div>
                    <div className={styles.privacidade}>
                        <LockKey  className={styles.icons} size={75} />
                        <h3> Privacidade </h3>
                        <p> Não compartilhe informações pessoais suas. Respeite também a privacidade dos outros membros.</p>
                    </div>
                    <div className={styles.denuncie}>
                        <Warning className={styles.icons} size={75} />
                        <h3>Denuncie</h3>
                        <p>Entre em contato conosco em caso de  situações desagradáveis. Estamos  a favor do seu bem- estar! </p>
                    </div>
                </div>
                <button className={styles.contate}>CONTATE-NOS</button> 
            </main>
        </div>
    )
}