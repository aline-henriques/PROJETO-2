import { useState, useRef } from 'react';
import { Header } from '../../Layouts/Header/Header';
import styles from './ForumInicial.module.css'
import { Fire, NotePencil } from '@phosphor-icons/react';
import { Posts } from '../../Components/Posts/Posts';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Services/AuthContext';
import FotoAnonima from '../../assets/img/Foto_Anonima.jpg'


const PostsEmAlta =[
    {
        id:1,
        author: {
            avatarUrl: "https://pbs.twimg.com/profile_images/1893010592484491264/-jaz88Xa_400x400.jpg",
            name: "Guilherme Mattos"
        },
<<<<<<< HEAD
        content: "Estou finalmente aprendendo a dizer não e impor meus limites. Tem sido difícil mas estou orgulhoso do meu progresso.",   
=======
        content: "Estou finalmente aprendendo a dizer não e impor meus limites. Tem sido difícil mas estou orgulhoso do meu progresso!",   
>>>>>>> 587d101 (Ajustes básicos)

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

export function ForumInicial (){

    // CheckBox
    const [checkedItems, setCheckedItems] = useState({})
    const handleCheck = (mark) => {
        setCheckedItems((prev) => ({
            ...prev,
            [mark]: !prev[mark],
        }));
    };

    // Navegação
    const navigate = useNavigate();

    // Validação
    const { user } = useAuth();
    const { isAuthenticated } = useAuth();

    // Novo Post
    const [newPostText, setNewPostText] = useState('')
    const [posts, setPosts] = useState([]);
    const lastPostRef = useRef(null);
    function handleCreateNewPost(){
        event.preventDefault()

        if (!isAuthenticated) {
<<<<<<< HEAD
            alert("Você precisa estar logado para publicar.");
=======
            alert("Você precisa estar logado para publicar!");
>>>>>>> 587d101 (Ajustes básicos)
            navigate('/Login');
            return;
  }

        if (!newPostText.trim()) return;

        const isAnonimo = checkedItems['postarAnonimo'];
        const newPost ={
            id:posts.length + 1,
            content:newPostText,
            anonimo: isAnonimo,
            author: {
                name: isAnonimo ? 'Anônimo' : user?.name,
                avatarUrl: isAnonimo? FotoAnonima
                         : user?.avatarUrl 
            }
    };
        setPosts([...posts, newPost]);
        setNewPostText('');

        setTimeout(() => {
            if (lastPostRef.current) {
            lastPostRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 0);

    }
    
    // DarkMode
    const [darkMode, setDarkMode] = useState(false);
    const toggleColors = () => setDarkMode((prev) => !prev);
    
    return( 
        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`} >
            <Header onToggleColors={toggleColors} isDarkMode={darkMode} />
            <div className={styles.introduction}>
<<<<<<< HEAD
                <h1>Forúm Burnout</h1>
                <p>Compartilhe seus pensamentos e experiências de forma que desejar!</p>
=======
                <h1>Fórum Burnout</h1>
                <p>Compartilhe seus pensamentos e experiências da forma que desejar!</p>
>>>>>>> 587d101 (Ajustes básicos)
                <button className={styles.buttonPublique}>Publique</button>
            </div>
            <div className={styles.postsArea}>
                <div className={styles.posts}>
                    <div className={styles.title}>
                        <Fire size={32} color='darkOrange' weight='fill'/>
                        <div className={styles.linhaVertical}>.</div>
                        <h2>Publicações em Alta</h2>
                    </div>

                    {!isAuthenticated &&(
                        <>
                            <div className={styles.blurDiv}>
                                <div className={styles.postsEmAltaDeslog}>
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

                            <div className={styles.mensagemLogar} >
<<<<<<< HEAD
                                <span>Para visualizar, logue em uma conta</span>
                                <button onClick={() => navigate('/Login')}> 
                                    Fazer login
=======
                                <span>Para visualizar, logue em uma conta.</span>
                                <button onClick={() => navigate('/Login')}> 
                                    Fazer Login
>>>>>>> 587d101 (Ajustes básicos)
                                </button>
                            </div>
                        </>
                    )}
                    
                    
                    {isAuthenticated &&(
                        <>
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
                        </>
                    )}
                    
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

                            <label className={styles.checkBoxLabel}>
                                <input 
                                    type="checkbox"
                                    checked={checkedItems['postarAnonimo'] || false}
                                    onChange={() => handleCheck('postarAnonimo')}
                                />
                                Postar Anônimamente
                            </label>

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
                <div>
                    
                    {!isAuthenticated &&(
                        <>
                           <div className={styles.postsFeedDeslogado}>
                                {PostsFeed.map(post =>{
                                    return (<Posts
                                    key={post.id}
                                    author = {post.author}
                                    content= {post.content}
                                    />
                                    )
                                })}
                            </div>      
<<<<<<< HEAD
                            <div className={styles.mensagemLogarFeed} >
                                <span>Para visualizar, logue em uma conta</span>
                                <button onClick={() => navigate('/Login')}> 
                                    Fazer login
                                </button>
                            </div>
=======

>>>>>>> 587d101 (Ajustes básicos)
                        </>
                    )}
                    
                    
                    {isAuthenticated &&(
                        <>
                            <div className={styles.postsFeedLogado}>
                                {PostsFeed.map(post =>{
                                    return (<Posts
                                    key={post.id}
                                    author = {post.author}
                                    content= {post.content}
                                    />
                                    )
                                })}
                            </div>      
                        </>
                    )}

                    <div className={styles.postsFeed}>
                            {posts.map((publish, index) => {
                            const isLast = index === posts.length - 1;
                            return (
                                <div ref={isLast ? lastPostRef : null} key={index} className={styles.areaFeed}>
                                <Posts content={publish.content} author={publish.author} anonimo={publish.anonimo}/>
                                </div>
                            );
                            })}
                    </div>   
                    
                </div>
            </article>
        
            </div>
        
    );
}