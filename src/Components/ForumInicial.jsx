import { useState } from 'react';
import { Header } from './Header';
import styles from './ForumInicial.module.css'
import { Fire, NotePencil } from '@phosphor-icons/react';
import { Posts } from './Posts';
import { NavLink } from 'react-router-dom';

const PostsEmAlta =[
    {
        id:1,
        author: {
            avatarUrl: "https://pbs.twimg.com/profile_images/1867600296920100864/IsNMUhqC_400x400.jpg",
            name: "Danilo Vinicius"
        },
        content: "Estou finalmente aprendendo a dizer não e impor meus limites. Tem sido difícil mas estou orgulhosa do meu progresso.",   

    },
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
                <form action="submit">
                    <div className={styles.novoPost}>
                        <input 
                        type="text"
                        name='publish'
                        placeholder="Escreva o que está em seu coração...lembre-se de respeitar as diretrizes." />
                        <div className={styles.novoPostBotton}>
                            <button>Publicar</button>
                            <p>Você não está sozinho. Cada história importa!</p>
                        </div>
                        
                    </div>
                </form>

            </div>

        </div>
        
    );
}