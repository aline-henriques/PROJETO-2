import styles from './Limites.module.css'

export function Limites ({content}){
    return(
        <div className={styles.content}>
            <div className={styles.newsBox}>
                {content.map(line =>{
                    
                    if (line.type == 'title'){
                        return (
                            <div className={styles.line} key={line.content} >
                                <strong className={styles.title}>
                                    {line.content}
                                    <span className={styles.icon}>{line.icon}</span>
                                </strong>
                            </div>
                        )
                    }else if (line.type == 'paragraph'){
                        return <p className={styles.paragrafo}key={line.content}><div>{line.icon}</div>{line.content}</p>;
                    }
                })}
            </div>
        </div>
    )
}