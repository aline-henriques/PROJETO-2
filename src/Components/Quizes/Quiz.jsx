import { useState } from 'react';
import { useQuizHistory } from '../../Services/QuizHistoricoContext';
import styles from './Quiz.module.css';
import { useAuth } from '../../Services/AuthContext';

export function Quiz({isDarkMode}) {
   
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
    const { addResult } = useQuizHistory();
    const { user, atualizarStatus } = useAuth();


     const handleAnswer = (value) => {
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            setScore(prev => prev + value);
            setCurrentQuestion(nextQuestion);
        } else {
            const finalScore = score + value;
            const timestamp = new Date().toLocaleString();
            const level = getBurnoutLevel(finalScore);

            const result = {
                score: finalScore,
                level,
                date: timestamp
            };

            addResult(result);
            atualizarStatus(level);
            setScore(finalScore);
            setShowResult(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    const getBurnoutLevel = (finalScore) => {
        if (finalScore <= 5) return "baixo";
        if (finalScore <= 10) return "moderado";
        if (finalScore <= 15) return "alto";
        return "alarmante";
    };

    const getMessageFromLevel = (level) => {
    switch (level) {
        case "baixo":
            return "Sem sinais de burnout. Continue se cuidando!";
        case "moderado":
            return "Atenção: pequenos sinais de estresse. Fique atento ao seu bem-estar.";
        case "alto":
            return "Alerta: sinais moderados de burnout. Considere buscar apoio profissional.";
        case "alarmante":
            return "Importante: altos sinais de burnout! Procure apoio psicológico urgentemente.";
        default:
            return "Nível desconhecido.";
    }
};


    const progressPercent = Math.round((currentQuestion / questions.length) * 100);

    return (
        <div className={`${styles.quizContainer} ${isDarkMode ? styles.dark : styles.light}`}>
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
                    <p>{getMessageFromLevel(user.status)}</p>
                    <button onClick={handleRestart} className={styles.restartButton}>
                        Refazer o Teste
                    </button>
                </div>
            )}
        </div>
    );
}