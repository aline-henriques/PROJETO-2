import styles from './Limites.module.css'

export function Limites ({content}){
    return(
        <div className={styles.content}>
            <div className={styles.newsBox}>
                {content.map(line =>{
                    
                    if (line.type == 'title'){
                        return <strong className={styles.title} key={line.content}>{line.content}<div>{line.icon}</div></strong>
                    }else if (line.type == 'paragraph'){
                        return <p className={styles.paragrafo}key={line.content}><div>{line.icon}</div>{line.content}</p>;
                    }
                })}
            </div>
        </div>
    )
}