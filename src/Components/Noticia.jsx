import styles from './Noticia.module.css'

export function Noticia ({content}){
    return(
        <div className={styles.content}>
            <div className={styles.newsBox}>
                {content.map(line =>{
                    
                    if (line.type == 'title'){
                        return <strong key={line.content}>{line.content}</strong>
                    }else if (line.type == 'paragraph'){
                        return <p className={styles.paragrafo}key={line.content}>{line.content}</p>;
                    }else if (line.type == 'link'){
                        return <p className={styles.lerMais} key ={line.content}><a href='#'>{line.content}</a> </p>;
                    }
                })}
            </div>
        </div>
    )
}