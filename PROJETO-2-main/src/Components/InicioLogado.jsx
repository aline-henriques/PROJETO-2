import { Header } from "./Header";
import { PrincipalContent } from "./PrincipalContent";
import { FunctionalyInfo } from "./FunctionalyInfo";
import styles from './InicioLogado.module.css';
import { useState } from "react";

export function InicioLogado() {
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