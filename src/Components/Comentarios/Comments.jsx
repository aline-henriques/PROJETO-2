import styles from './Comments.module.css';
import { Heart, Trash, User } from '@phosphor-icons/react';
import { useState } from 'react';

export function Comments({ content, author, onDeleteComment, anonimo }) {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => setLiked(prev => !prev);

    return (
        <article className={`${styles.areaTexto} ${anonimo ? styles.anonimo : ''}`}>
            <header>
                <div className={styles.author}>
                    <img src={author.avatarUrl} className={styles.imgUserComment} />
                    <strong>{author.name}</strong>
                    {anonimo && (
                        <span className={styles.anonTag}>
                        <User size={14} weight="fill" />
                        Anônimo
                        </span>
                    )}
                </div>
                <div>
                    <button className={styles.deleteButton} onClick={onDeleteComment} title="Deletar comentário">
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
                            <Heart className={styles.likeButton} size={20} color="red" weight="fill" />
                        ) : (
                            <Heart className={styles.likeButton} size={20} color="black" />
                        )}
                    </button>
                </div>
            </footer>
        </article>
    );
}