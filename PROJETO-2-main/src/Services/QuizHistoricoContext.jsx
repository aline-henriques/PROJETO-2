import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const QuizHistoryContext = createContext();

export function useQuizHistory() {
    return useContext(QuizHistoryContext);
}

export function QuizHistoryProvider({ children }) {
    const { user } = useAuth();
    const [history, setHistory] = useState([]);

    useEffect(() => {
            if (!user) return;
            const storageKey = `quizHistory_${user.usuario}`;
            const stored = JSON.parse(localStorage.getItem(storageKey)) || [];
            setHistory(stored);
        }, [user]);

    const addResult = (newResult) => {
        if (!user) return;
        const storageKey = `quizHistory_${user.usuario}`;
        const updatedHistory = [...history, newResult];
        setHistory(updatedHistory);
        localStorage.setItem(storageKey, JSON.stringify(updatedHistory));
    };

    return (
        <QuizHistoryContext.Provider value={{ history, addResult }}>
            {children}
        </QuizHistoryContext.Provider>
    );
}