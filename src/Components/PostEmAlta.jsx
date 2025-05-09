import { useState } from 'react';
import styles from './PostEmAlta.module.css'
import { Heart, ChatCircleDots} from '@phosphor-icons/react';



export function PostEmAlta ({author, content}){
    
    const [liked, setLiked] = useState(false);

    const toggleLike = () => setLiked(!liked);
    
    return(
        <article className={styles.areaTexto}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <img src={author.avatarUrl} alt="foto perfil" className={styles.imgUserPost}/>
                    <strong>{author.name}</strong>
                </div>
            </header>
            <div className={styles.content}>
                <p>{content}</p>
            </div>
            <footer className={styles.footer}>
                <div className={styles.footerButtons}> 
                     <button onClick={toggleLike}>
                        {liked ? (
                        <Heart className={styles.likeButton} size={20} color="red" weight="fill" />
                        ) : (
                        <Heart  className={styles.likeButton} size={20} color="gray" />
                        )}
                    </button>
                    <button> 
                        <ChatCircleDots size={20} color='grey'/> </button>
                </div>
                <div>
                    <span>18 comentarios</span>
                </div> 
            </footer>
        </article>
    )
}
