import { Header } from "./Header";
import { PrincipalContent } from "./PrincipalContent";
import { FunctionalyInfo } from "./FunctionalyInfo";
import styles from './InicioLogado.module.css';
import { useState } from "react";

export function InicioLogado() {

    const { login } = useAuth();

    const handleLogin = () => {
        login({
            name: "Danilo Vinicius",
            avatarUrl: "https://pbs.twimg.com/profile_images/1867600296920100864/IsNMUhqC_400x400.jpg"
        });
        };
        
    const [darkMode, setDarkMode] = useState(false);
    const toggleColors = () => setDarkMode((prev) => !prev);

    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
            <Header onToggleColors={toggleColors} isDarkMode={darkMode} />
            <PrincipalContent isDarkMode={darkMode} />
            <FunctionalyInfo isDarkMode={darkMode} />
        </div>
    );
}