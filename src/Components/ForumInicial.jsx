import { useState } from 'react';
import { Header } from './Header';
import styles from './ForumInicial.module.css'
import { Fire } from '@phosphor-icons/react';
import { PostEmAlta } from './PostEmAlta';

const PostsEmAlta =[
    {
        id:1,
        author: {
            avatarUrl: "https://pbs.twimg.com/profile_images/1867600296920100864/IsNMUhqC_400x400.jpg",
            name: "Danilo Vinicius"
        },
        content: "Estou finalmente aprendendo a dizer não e impor meus limites. Tem sido difícil mas estou orgulhosa do meu progresso.",   

    },
]

export function ForumInicial (){
    
    const [darkMode, setDarkMode] = useState(false);
    const toggleColors = () => setDarkMode((prev) => !prev);
    
    return( 
        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`} >
             <Header onToggleColors={toggleColors} isDarkMode={darkMode} />
            <div className={styles.introduction}>
                <h1>Forúm anônimo</h1>
                <p>Compartilhe seus pensamentos e experiências de forma anônima!</p>
                <button className={styles.buttonPublique}>Publique</button>
            </div>
            <div className={styles.postsArea}>
                <div className={styles.title}>
                    <Fire size={32}/>
                    <div className={styles.linhaVertical}>.</div>
                    <h2>Publicações em Alta</h2>
                </div>
                <div className={styles.postsEmAlta}>
                    {PostsEmAlta.map(post =>{
                        return (<PostEmAlta 
                        key={post.id}
                        author = {post.author}
                        content= {post.content}
                        />
                        )
                    })}
                </div>
            </div>
        </div>
        
    );
}