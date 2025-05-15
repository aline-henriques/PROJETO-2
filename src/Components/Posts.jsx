import { useState } from 'react';
import styles from './Posts.module.css';
import { Heart, ChatCircleDots, User } from '@phosphor-icons/react';
import { Comments } from './Comments.jsx';
import { useAuth } from '../AuthContext'; 
import FotoAnonima from '../assets/img/Foto_Anonima.jpg'

export function Posts({ author, content, anonimo }) {

    // CheckBox
    const [checkedItems, setCheckedItems] = useState({})
    const handleCheck = (mark) => {
        setCheckedItems((prev) => ({
            ...prev,
            [mark]: !prev[mark],
        }));
    };

    // Indormações do usuario
    const { user } = useAuth();

    // Novo Comentario
    const [comments, setComments] = useState([]);
    const [mostrarComentario, setMostrarComentario] = useState(false);
    const handleClick = () => {
        setMostrarComentario(prev => !prev);
    };
    const [newCommentText, setNewCommentText] = useState('');
    function handleCreateNewComment(event) {
        event.preventDefault();

        const isAnonimo = checkedItems['postarAnonimo'];
        const novoComentario = {
            id: Date.now(),
            content: newCommentText,
            anonimo: isAnonimo,
            author: {
                name: isAnonimo ? 'Anônimo' : user?.name,
                avatarUrl: isAnonimo? FotoAnonima
                            : user?.avatarUrl 
            }  
        };

        setComments([...comments, novoComentario]);
        setNewCommentText('');
    }


    // Like
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const toggleLike = () => {
        setLiked(prev => !prev);
        setLikeCount(prev => (liked ? prev - 1 : prev + 1));
    };
   
    // Deletar comentario
    function onDeleteComment(commentId) {
        const commentsFiltered = comments.filter(comment => comment.id !== commentId);
        setComments(commentsFiltered);
    }

    return (
        <article className={`${styles.areaTexto} ${anonimo ? styles.anonimo : ''}`}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <img src={author.avatarUrl} alt="foto perfil" className={styles.imgUserPost} />
                    <strong>{author.name}</strong>
                    {anonimo && (
                        <span className={styles.anonTag}>
                        <User size={14} weight="fill" />
                        Anônimo
                        </span>
                    )}
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
                        <label className={styles.checkBoxLabel}>
                            <input 
                                type="checkbox"
                                checked={checkedItems['postarAnonimo'] || false}
                                onChange={() => handleCheck('postarAnonimo')}
                            />
                            Postar Anônimamente
                        </label>
                    </div>

                    <div>
                        {comments.map((comment) => (
                            <Comments
                                key={comment.id}
                                content={comment.content}
                                author={comment.author}
                                anonimo={comment.anonimo}
                                onDeleteComment={() => onDeleteComment(comment.id)}
                                
                            />
                        ))}
                    </div>
                </form>
            )}
        </article>
    );
}