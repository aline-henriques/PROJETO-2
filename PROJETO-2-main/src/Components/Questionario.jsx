import styles from './Questionario.module.css';
import { Header } from "./Header";
import { useState } from 'react';
import { Footer } from './Footer';
import { Quiz } from './Quiz';

export function Questionario() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleColors = () => setDarkMode((prev) => !prev);

    const scrollToQuiz = () => {
        const quizElement = document.getElementById('quiz');
        if (quizElement) {
            quizElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`${styles.container} ${styles.withFooter} ${darkMode ? styles.dark : styles.light}`}>
            <Header onToggleColors={toggleColors} isDarkMode={darkMode} />

            <section className={styles.heroSection}>
                <h1>Questionários de Saúde Mental</h1>
                <p>Conheça melhor o seu estado emocional através de perguntas simples e rápidas.</p>
                <button className={styles.ctaButton} onClick={scrollToQuiz}>
                    Iniciar Teste
                </button>
            </section>

            <main className={styles.mainContent}>

                <section id="start" className={styles.textSection}>
                    <h2>O que é Burnout?</h2>
                    <p>
                        O burnout é uma condição de esgotamento físico, emocional e mental, provocada por situações prolongadas de estresse, especialmente no ambiente de trabalho ou acadêmico.
                    </p>
                    <p>
                        Caracteriza-se por sentimentos intensos de cansaço, desânimo e falta de realização pessoal. Reconhecido oficialmente pela Organização Mundial da Saúde (OMS), o burnout exige atenção, cuidado e, em muitos casos, intervenção profissional.
                    </p>
                    <hr className={styles.divider} />
                </section>

                <section className={styles.textSection}>
                    <h2>Importante</h2>
                    <p>
                        Este questionário é uma ferramenta de autoavaliação e <strong>não substitui</strong> uma avaliação clínica realizada por profissionais da saúde mental.
                    </p>
                    <p>
                        Se você identificar sinais persistentes de esgotamento, recomendamos buscar apoio de um psicólogo ou profissional de saúde capacitado. Cuidar de você é um ato de amor e coragem!
                    </p>
                    <hr className={styles.divider} />
                </section>

                <section className={styles.textSection}>
                    <h2>Como Responder?</h2>
                    <p>
                        Para cada afirmação apresentada, selecione a frequência que melhor descreve como você se sente atualmente:
                    </p>

                    <div className={styles.frequencyBadges}>
                        <span className={`${styles.badge} ${styles.fadeIn}`}><span className={styles.emoji}>🚫</span> Nunca</span>
                        <span className={`${styles.badge} ${styles.fadeIn}`}><span className={styles.emoji}>🌤️</span> Raramente</span>
                        <span className={`${styles.badge} ${styles.fadeIn}`}><span className={styles.emoji}>⏳</span> Às vezes</span>
                        <span className={`${styles.badge} ${styles.fadeIn}`}><span className={styles.emoji}>🔁</span> Frequentemente</span>
                        <span className={`${styles.badge} ${styles.fadeIn}`}><span className={styles.emoji}>🔥</span> Sempre</span>
                    </div>


                    <p>
                        Responda com sinceridade e calma, refletindo sobre seu momento de vida.  
                        Ao final, some seus pontos para obter uma visão geral sobre possíveis sinais de burnout.
                    </p>
                    <p><em>Lembre-se: reconhecer suas emoções é um passo valioso para o autocuidado.</em></p>
                    <hr className={styles.divider} />
                </section>

                <section id="quiz">
                    <Quiz isDarkMode={darkMode} />
                </section>

            </main>

            <Footer isDarkMode={darkMode} />
        </div>
    )
}