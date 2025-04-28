import { useState } from 'react';
import styles from './Quiz.module.css';

export function Quiz() {
    const questions = [
        "Sinto-me emocionalmente exausto(a) devido ao trabalho ou estudos.",
        "Sinto que estou no limite emocionalmente.",
        "Sinto-me cansado(a) ao acordar e pensar nas obrigações do dia.",
        "Sinto que meu trabalho ou estudo está me consumindo.",
        "Tenho dificuldade em encontrar prazer em atividades que antes gostava."
    ];

    const options = [
        { text: "Nunca", value: 0 },
        { text: "Raramente", value: 1 },
        { text: "Às vezes", value: 2 },
        { text: "Frequentemente", value: 3 },
        { text: "Sempre", value: 4 },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (value) => {
        setScore(prev => prev + value);

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    const getResultMessage = () => {
        if (score <= 5) return "Sem sinais de burnout. Continue se cuidando!";
        if (score <= 10) return "Atenção: pequenos sinais de estresse. Fique atento ao seu bem-estar.";
        if (score <= 15) return "Alerta: sinais moderados de burnout. Considere buscar apoio profissional.";
        return "Importante: altos sinais de burnout! Procure apoio psicológico urgentemente.";
    };

    const progressPercent = Math.round((currentQuestion / questions.length) * 100);

    return (
        <div className={styles.quizContainer}>
            {!showResult && (
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
                </div>
            )}

            {!showResult ? (
                <div className={styles.fade}>
                    <h2 className={styles.question}>{questions[currentQuestion]}</h2>
                    <div className={styles.options}>
                        {options.map((option, index) => (
                            <button 
                                key={index} 
                                className={styles.optionButton}
                                onClick={() => handleAnswer(option.value)}
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>
                    <p className={styles.progressText}>
                        Pergunta {currentQuestion + 1} de {questions.length}
                    </p>
                </div>
            ) : (
                <div className={styles.result}>
                    <h2>Resultado</h2>
                    <p>{getResultMessage()}</p>
                    <button onClick={handleRestart} className={styles.restartButton}>
                        Refazer o Teste
                    </button>
                </div>
            )}
        </div>
    );
}