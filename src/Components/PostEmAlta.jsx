import styles from './PostEmAlta.module.css'
import { Heart, ChatCircleDots } from '@phosphor-icons/react';

export function PostEmAlta ({author, content}){
    return(
        <article className={styles.areaTexto}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <strong src={author.avatarUrl}>{author.name}</strong>
                </div>
            </header>
            <div className={styles.content}>
                <p>{content}</p>
            </div>
            <footer className={styles.footer}>
                <div> 
                    <button> <Heart/> </button>
                    <button> <ChatCircleDots/> </button>
                </div>
                <div>
                    <span>18 comentarios</span>
                </div> 
            </footer>
        </article>
    )
}