import { Header } from './Header';
import styles from './Saude.module.css';
import { useState } from 'react';
import { Noticia } from './Noticia';
import { Recurso } from './Recurso';
import { Fire } from "@phosphor-icons/react";

const noticias = [
    {
    id: 1,
    content:[
        {type: 'title', content: "Burnout e o sono: qual é a relação?"},
        {type: 'paragraph', content: "Nova pesquisa revela impacto do sono na sindrome."},
        {type: 'link', content: 'Ler Mais...'}
    ]
    },
    {
    id: 2,
    content:[
        {type: 'title', content: "Crescente taxa de estresse na população"},
        {type: 'paragraph', content: "Especialistas compartilham dados alarmantes na web."},
        {type: 'link', content: 'Ler Mais...'}
    ] 
    },
    {
    id: 3,
    content:[
        {type: 'title', content: "Empatia pode reduzir ansiedade"},
        {type: 'paragraph', content: "Saiba como pequenas atitudes impactam a mente."},
        {type: 'link', content: 'Ler Mais...'}
    ] 
    },
]

const recursos =[
    {
    id: 1,
    style: 'light',
    content:[
        {type: 'title', content: "DICA da Semana!"},
        {type: 'paragraph', content: "Desconecte-se por 10 minutos ao dia e sinta a diferença!"},
        {type: 'link', content: 'Ler Mais...'}
    ]
    },
    {
    id: 2,
    style: 'light',
    content:[
        {type: 'title', content: "Experimente o checklist de limites saudáveis!"},
        {type: 'paragraph', content: "Se coloque como prioridade"},
        {type: 'link', content: 'Clique Aqui!'}
    ] 
    },
    {
    id: 3,
    style: 'dark',
    content:[
        {type: 'title', content: "Aúdio/Som para acalmar e relaxar"},
        {type: 'paragraph', content: "Desfrute num dia estressante. Vai ficar tudo bem!"},
        {type: 'link', content: 'Ler Mais...'}
    ] 
    },
]
 

export function Saude(){
    const [darkMode, setDarkMode] = useState(false);
    const toggleColors = () => setDarkMode((prev) => !prev);

    return(
        <div className={`${styles.container} ${styles.withFooter} ${darkMode ? styles.dark : styles.light}`}>
            <Header  onToggleColors={toggleColors} isDarkMode={darkMode}  />

            <section className={styles.heroSection}>
                    <h1>+Saúde</h1>
                    <p>O que a ciência descobriu recentemente? Conheça mais sobre o assunto em nossa página +Saúde.</p>
            </section>
            <section className={styles.weekNews}>
                    <div className={styles.title}>
                        <Fire size={32} />
                        <div className={styles.linhaVertical}>.</div>
                        <h2>Notícias da Semana</h2>
                    </div>
                    <div className={styles.news}>
                    {noticias.map(noticia =>{
                        return (<Noticia
                            key={noticia.id}
                            content = {noticia.content}
                            />)
                    })}
                    </div>
                    <div className={styles.linhaInfo}></div>
            </section>
            <section className={styles.recursosUtilidades}>
                    <div className={styles.title}>
                        <h2>Recursos e utilidades pra você!</h2>
                    </div>
                    <div className={styles.news}>
                    {recursos.map(recurso =>{
                        return (<Recurso 
                            key={recurso.id}
                            style={recurso.style}
                            content = {recurso.content}
                            />)
                    })}
                    </div>
                    <div className={styles.linhaInfo}></div>
                
            </section>
            

        </div>
    )
}