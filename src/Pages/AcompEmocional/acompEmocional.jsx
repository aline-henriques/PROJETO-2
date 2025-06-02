import styles from '../AcompEmocional/acompEmocional.module.css';
import AcompEmocionalImg from '../../assets/img/AcompEmocionalImg.svg';
import { Header } from '../../Layouts/Header/Header';
import { HistoricoQuiz } from '../../Components/QuizHistorico/QuizHistorico.jsx';
import { PresentationChart } from "@phosphor-icons/react";
import { useEffect, useState} from 'react';
import { useAuth } from '../../Services/AuthContext';
import { useQuizHistory } from '../../Services/QuizHistoricoContext';


export function AcompEmocional () {
   //Autenticação
    const { user, atualizarStatus } = useAuth();
    const { history } = useQuizHistory(); 

    const [ mostrarHistorico, setMostrarHistorico] = useState(false)

    const handleMostrarHistorico = () => {
        setMostrarHistorico((prev) => !prev);}

     // DarkMode
    const [darkMode, setDarkMode] = useState(false);
    const toggleColors = () => setDarkMode((prev) => !prev);
    
    
    useEffect(() => {
        if (history.length > 0) {
            const ultimo = history[history.length - 1];
            if (user?.status !== ultimo.level) {
                atualizarStatus(ultimo.level);
            }
        }
    }, [history, user?.status]);
    
    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
           
            <Header onToggleColors={toggleColors} isDarkMode={darkMode} />

            <main className={styles.mainAcompEmocional}>
                <div className={styles.title}>
                    <PresentationChart size={45} color='orange' weight='fill' />
                    <div className={styles.linhaVertical}>|</div>
                    <h2>Meu progresso Emocional</h2>
                </div>
                <div className={styles.introducao}>
                    <div className={styles.introducaoText}>
                        <h2> Olá {user?.name ? user.name.split(' ')[0] : 'Usuário'}!</h2>
                        <p>Aqui você pode 
                        <strong> visualizar seus resultados </strong> 
                        para os questionários de saúde mental, e descobrir 
                        <strong> como tem se sentido </strong> ao longo do tempo. 
                        </p>
                    </div>
                    <div>
                        <img src={AcompEmocionalImg} alt="imagem" />
                    </div>
                </div>
                <section>
                    <h2>Questionarios</h2>
                    <p>Clique para vizualiar o historico dos seus resultados </p>
                    <div className={styles.questionarios}>
                        <div  className={`${styles.questionariosBox} ${mostrarHistorico ? styles.expandido : ''}`}>
                            <h3>Sinais de burnout</h3>
                            {mostrarHistorico && (
                                <div>
                                    <HistoricoQuiz />
                                </div>
                            )}
                            <button onClick={handleMostrarHistorico}>{mostrarHistorico ? 'Ocultar Resultados' : 'Mostrar Resultados'}
                            </button> 
                        </div>
                            {!mostrarHistorico && (
                                <>
                                <div className={styles.questionariosBox}> 
                                    <h3>Em Breve</h3>
                                </div>
                                <div className={styles.questionariosBox}>
                                    <h3>Em Breve</h3>
                                </div>
                                </>
                            )}
                    </div>

                </section>
                <section>
                    <h2>Niveis</h2>
                    <p> Acompanhe o seu nível de burnout de forma clara, com base nas respostas dos seus questionários. </p>
                    <div className={styles.niveis}>
                        <div className={styles.questionariosBox}>
                            <h3>Nível de Estresse</h3>
                            <p>Status atual: <strong>{user.status}</strong></p>
                        </div>
                        <div className={styles.questionariosBox}>
                            <h3>Nível de Ansiedade </h3>
                            <p>Status atual: <strong>{user.status}</strong></p>
                        </div>
                        <div className={styles.questionariosBox}>
                            <h3>Nível de Depressão </h3>
                            <p>Status atual: <strong>{user.status}</strong></p>
                        </div>
                    </div>
                </section>
            </main>    
        </div>
    )
}