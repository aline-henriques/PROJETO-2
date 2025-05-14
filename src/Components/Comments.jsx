import styles from './Comments.module.css'
import { Heart, Trash} from '@phosphor-icons/react';
import { useState } from 'react';


export function Comments ({content , author, onDeleteComment}) {
    
    const [liked, setLiked] = useState(false);
    
    const toggleLike = () => setLiked(!liked);

    function handleDeleteComment(){
        onDeleteComment(content);
    }


    return(
         <article className={styles.areaTexto}>
            <header>
                <div className={styles.author}>
                    <img src={author.avatarUrl} className={styles.imgUserComment}/>
                    <strong>{author.name}</strong>
                </div>
                <div>
                    <button 
                    className={styles.deleteButton}
                    onClick={handleDeleteComment}
                    title='Deletar comentário'>

                        <Trash size={20} />
                    
                    </button>
                </div>
            </header>
            <div className={styles.content}>
                <p>{content}</p>
            </div>
            <footer className={styles.footer}>
                <div className={styles.footerButtons}> 
                     <button onClick={toggleLike}>
                        {liked ? (
                        <Heart className={styles.likeButton} size={20} color="red" weight="fill"  />
                        ) : (
                        <Heart  className={styles.likeButton} size={20} color="white" />
                        )}
                    </button>
                </div>
            </footer>
        </article>
    );
}