import { useQuizHistory } from '../../Services/QuizHistoricoContext';
import styles from '../QuizHistorico/QuizHistorico.module.css'

export function HistoricoQuiz() {
    const { history } = useQuizHistory();

    if (!history.length) {
        return <p className={styles.noResults}>Você ainda não respondeu nenhum quiz.</p>;
    }

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

    return (
        <div className={styles.container}>
            <h2 className={styles.title}> Histórico de Resultados</h2>
            <ul className={styles.cardContainer}>
                {[...history].reverse().map((item, index) => (
                    <li key={index} className={styles.card}>
                        <strong>Data:</strong> {item.date}<br />
                        <strong>Mensagem:</strong> {getMessageFromLevel(item.level)}<br />
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}