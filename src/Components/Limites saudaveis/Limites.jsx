import styles from './Limites.module.css';
import { useState } from 'react';

export function Limites ({content, isDarkMode}){

    const [checkedItems, setCheckedItems] = useState({})

    const handleCheck = (index) => {
        setCheckedItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return(
        <div className={`${styles.content} ${isDarkMode ? styles.dark : styles.light}`}>
            <div className={styles.newsBox}>
                {content.map((line, index) => {
                    if (line.type === 'title') {
                        return (
                        <div className={styles.line} key={line.content}>
                            <strong className={styles.title}>
                            {line.content}
                            <span className={styles.icon}>{line.icon}</span>
                            </strong>
                        </div>
                        );
                    } else if (line.type === 'paragraph') {
                        return (
                        <p className={styles.paragrafo} key={line.content}>
                            <label className={styles.checkBoxLabel}>
                            <input 
                                type="checkbox"
                                checked={checkedItems[index] || false}
                                onChange={() => handleCheck(index)}
                            />
                            </label>
                            {line.content}
                        </p>
                        );
                    }
                    })}
            </div>
        </div>
    )
}