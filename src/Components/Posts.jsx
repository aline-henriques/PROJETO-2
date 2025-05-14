import { useState } from 'react';
import styles from './Posts.module.css'
import { Heart, ChatCircleDots} from '@phosphor-icons/react';
import { Comments } from './Comments.jsx';



export function Posts ({author, content}){
    
    const [newCommentText, setNewCommentText] = useState('')
    
    const [liked, setLiked] = useState(false);

    const [likeCount, setLikeCount] = useState(0);

    const toggleLike = () => {
     if(liked){
        setLikeCount((prev) => prev - 1);
     }else{
        setLikeCount((prev) => prev + 1);
     }
     setLiked((prev) => !prev);
    }

    function onDeleteComment(commentToDelete){
        const commentsWhithoutDeletedOne = comments.filter(comment =>{
            return comment !== commentToDelete;
        })
        
        setComments(commentsWhithoutDeletedOne);
    }

    const [comments, setComments] = useState([]);

    function handleCreateNewComment(){
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    const [mostrarComentario, setMostrarComentario] = useState(false);
    
    const handleClick = () =>{
        setMostrarComentario((prev) => !prev);
    }
    

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
                     <span>{likeCount}</span>
                    <button onClick={handleClick}> 
                        <ChatCircleDots size={20} color='grey'/> </button>
                </div>
                <div>
                    <span>{comments.length} comentarios</span>
                </div>   
            </footer>
            <form onSubmit={handleCreateNewComment} className={styles.forms}>
                {mostrarComentario && (
                    <>
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
                        {comments.map((comment, index) => (
                            <Comments key={index} content={comment} author={author} onDeleteComment= {onDeleteComment}/>
                        ))}
                    </div>
                    </>
                )}
            </form>
            
        </article>
    )
}
