import { useState, useRef } from 'react';
import { Header } from './Header';
import styles from './ForumInicial.module.css'
import { Fire, NotePencil } from '@phosphor-icons/react';
import { Posts } from './Posts';
import { NavLink } from 'react-router-dom';
import fotoPerfil from '../assets/img/Foto_perfil.jpg'
import { useAuth } from '../AuthContext'; 

const PostsEmAlta =[
    {
        id:1,
        author: {
            avatarUrl: "https://pbs.twimg.com/profile_images/1893010592484491264/-jaz88Xa_400x400.jpg",
            name: "Guilherme Mattos"
        },
        content: "Estou finalmente aprendendo a dizer não e impor meus limites. Tem sido difícil mas estou orgulhoso do meu progresso.",   

    },
     {
        id:2,
        author: {
            avatarUrl: "https://pbs.twimg.com/profile_images/1894169205039042560/dHbunUpS_400x400.jpg",
            name: "Dani Liu"
        },
        content: "Não me sinto feliz. Estou no meu limite, preciso de ajuda urgentemente!",   

    },
]

const PostsFeed=[
    {
        id:1,
        author: {
            avatarUrl: "https://pbs.twimg.com/profile_images/1893010592484491264/-jaz88Xa_400x400.jpg",
            name: "Guilherme Mattos"
        },
        content: "Estou precisando desabafar sobre algo que anda me incomodando bastante no trabalho, mas não tenho com quem expor para ouvir opiniões. Alguém poderia me ajudar? ",   

    },
     {
        id:2,
        author: {
            avatarUrl: "https://pbs.twimg.com/profile_images/1894169205039042560/dHbunUpS_400x400.jpg",
            name: "Dani Liu"
        },
        content: "Me sinto exausto. Meu chefe é muito abusivo e desrespeitoso. Queria poder conversar com alguém.",   

    },
]

export function ForumInicial ({author,content, usuarioLogado}){

    const { user } = useAuth();

    // Novo Post
    const [newPostText, setNewPostText] = useState('')
    const [posts, setPosts] = useState([]);
    const lastPostRef = useRef(null);
    function handleCreateNewPost(){
        event.preventDefault()
        setPosts([...posts, {
            id:posts.length + 1,
            content:newPostText,
            author: {
                name: user?.name || 'Anônimo',
                avatarUrl: user?.avatarUrl || 'https://via.placeholder.com/150'
            }
    }]);
        setPosts([...posts, newPost]);
        setNewPostText('');

        setTimeout(() => {
            if (lastPostRef.current) {
            lastPostRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 0);

    }
    
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
                <div className={styles.posts}>
                    <div className={styles.title}>
                        <Fire size={32} color='darkOrange' weight='fill'/>
                        <div className={styles.linhaVertical}>.</div>
                        <h2>Publicações em Alta</h2>
                    </div>
                    <div className={styles.postsEmAlta}>
                        {PostsEmAlta.map(post =>{
                            return (<Posts 
                            key={post.id}
                            author = {post.author}
                            content= {post.content}
                            />
                            )
                        })}
                    </div>
               </div>
               <div className={styles.rightMenu}>
                    <div className={styles.topicosPopulares}>
                        <h2>Tópicos Populares</h2>
                         <NavLink to="/PrecisoDesabafar" title='PrecisoDesabafar'> Preciso Desabafar</NavLink>
                         <NavLink to="/MeuChefeE" title='MeuChefeE'> Meu chefe é...</NavLink>
                         <NavLink to="/NaoAguentoMais" title='NaoAguentoMais'> Não aguento Mais</NavLink>
                         <NavLink to="/Solidão" title='Solidão'> Solidão</NavLink>
                         <NavLink to="/Progresso" title='Progresso'> Progresso</NavLink>
                    </div>
                    <div className={styles.diretrizes}>
                        <NavLink to="/DiretrizeComunidadeSegurança" title='ComunidadeSeguranca'>Diretrizes de Comunidade e Segurança</NavLink>
                    </div>
               </div>
                
            </div>

            <div className={styles.linhaInfo}></div>

            <div className={styles.publicarPost}>
                <header>
                     <div className={styles.title}>
                        <NotePencil size={32} color='darkOrange' weight='fill'/>
                        <div className={styles.linhaVertical}>.</div>
                        <h2>Faça uma publicação</h2>
                    </div>
                    <h3>Fale o que quiser. Aqui você é ouvido - e acolhido.</h3>
                </header>
                <form action="submit" onSubmit={handleCreateNewPost}>
                    <div className={styles.novoPost}>
                        <input 
                        type="text"
                        name='publish'
                        placeholder="Escreva o que está em seu coração...lembre-se de respeitar as diretrizes."
                        value={newPostText}
                        onChange={(e) => setNewPostText(e.target.value)}
                        required 
                        />
                        <div className={styles.novoPostBotton}>
                            <button type="submit" disabled={newPostText.length === 0}> 
                                Publicar
                            </button>
                            <p>Você não está sozinho. Cada história importa!</p>
                        </div>
                        
                    </div>
                </form>
            </div>            
            <div className={styles.linhaInfo}></div>
                        
            <article className={styles.feed}>
                <div className={styles.title}>
                    <h2>Publicações</h2>
                </div>    
                <div >
                    <div>
                        {PostsFeed.map(post =>{
                            return (<Posts 
                            key={post.id}
                            author = {post.author}
                            content= {post.content}
                            />
                            )
                        })}
                    </div>
                    <div className={styles.postsFeed}>
                        {posts.map((publish, index) => {
                        const isLast = index === posts.length - 1;
                        return (
                            <div ref={isLast ? lastPostRef : null} key={index}>
                            <Posts content={publish.content} author={publish.author} />
                            </div>
                        );
                        })}
                    </div>
                    
                </div>
            </article>
        
            </div>
        
    );
}