import { useState } from 'react';
import styles from './Posts.module.css';
import { Heart, ChatCircleDots } from '@phosphor-icons/react';
import { Comments } from './Comments.jsx';
import { useAuth } from '../AuthContext'; 

export function Posts({ author, content }) {
    const { user } = useAuth();

    const [newCommentText, setNewCommentText] = useState('');
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [comments, setComments] = useState([]);
    const [mostrarComentario, setMostrarComentario] = useState(false);

    const toggleLike = () => {
        setLiked(prev => !prev);
        setLikeCount(prev => (liked ? prev - 1 : prev + 1));
    };

    const handleClick = () => {
        setMostrarComentario(prev => !prev);
    };

    function handleCreateNewComment(event) {
        event.preventDefault();


        const novoComentario = {
            id: Date.now(),
            content: newCommentText,
            author: {
                name: user?.name || 'Anônimo',
                avatarUrl: user?.avatarUrl || 'https://via.placeholder.com/150'
    }
            
        };

        setComments([...comments, novoComentario]);
        setNewCommentText('');
    }

    function onDeleteComment(commentId) {
        const commentsFiltered = comments.filter(comment => comment.id !== commentId);
        setComments(commentsFiltered);
    }

    return (
        <article className={styles.areaTexto}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <img src={author.avatarUrl} alt="foto perfil" className={styles.imgUserPost} />
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
                            <Heart className={styles.likeButton} size={20} color="gray" />
                        )}
                    </button>
                    <span>{likeCount}</span>
                    <button onClick={handleClick}>
                        <ChatCircleDots size={20} color="grey" />
                    </button>
                </div>
                <div>
                    <span>{comments.length} comentários</span>
                </div>
            </footer>

            {mostrarComentario && (
                <form onSubmit={handleCreateNewComment} className={styles.forms}>
                    <div className={styles.novoComentarioArea}>
                        <input
                            placeholder="Digite algo..."
                            name="comment"
                            value={newCommentText}
                            onChange={(e) => setNewCommentText(e.target.value)}
                            required
                        />
                        <button className={styles.publicarButton} type="submit" disabled={newCommentText.length === 0}>
                            Comentar
                        </button>
                    </div>

                    <div>
                        {comments.map((comment) => (
                            <Comments
                                key={comment.id}
                                content={comment.content}
                                author={comment.author}
                                onDeleteComment={() => onDeleteComment(comment.id)}
                                
                            />
                        ))}
                    </div>
                </form>
            )}
        </article>
    );
}