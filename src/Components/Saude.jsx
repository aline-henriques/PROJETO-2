import { Header } from './Header';
import styles from './Saude.module.css';
import { useState } from 'react';
import { Noticia } from './Noticia';
import { Recurso } from './Recurso';
import { Blueprint, Fire, Student } from "@phosphor-icons/react";
import { Suitcase } from '@phosphor-icons/react';
import { SealCheck, Heartbeat, CheckFat, User, Handshake } from '@phosphor-icons/react';
import { Limites } from './Limites';

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

const limites =[
    {
        id: 1,
        content:[
            {type: 'title', content: "Horário de trabalho", icon: <Suitcase size={32}/>},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Estabeleço um horário fixo para começar e terminar o trabalho/estudos."},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Evito responder mensagens de trabalho/estudo fora do horário."},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Reservo pausas regulares durante o dia."}
            
        ]
    },
    {
        id: 2,
        content:[
            {type: 'title', content: "Saúde Física", icon: <Heartbeat size={32}/>},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Tenho uma rotina mínima de sono (6 a 8 horas por noite)."},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Faço pequenas pausas para me alongar ou caminhar."},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Me alimento de forma equilibrada, evitando longos períodos sem comer."}
            
        ]
    },
    {
        id: 3,
        content:[
            {type: 'title', content: "Espaço pessoal", icon: <User size={32}/>},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Tenho uma rotina mínima de sono (6 a 8 horas por noite)."},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Faço pequenas pausas para me alongar ou caminhar."},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Me alimento de forma equilibrada, evitando longos períodos sem comer."}
            
        ]
    },
    {
        id: 4,
        content:[
            {type: 'title', content: "Relações Interpessoais", icon: <Handshake size={32}/>},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Tenho uma rotina mínima de sono (6 a 8 horas por noite)."},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Faço pequenas pausas para me alongar ou caminhar."},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Me alimento de forma equilibrada, evitando longos períodos sem comer."}
            
        ]
    },
    {
        id: 5,
        content:[
            {type: 'title', content: "Saúde Física", icon: <Heartbeat size={32}/>},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Tenho uma rotina mínima de sono (6 a 8 horas por noite)."},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Faço pequenas pausas para me alongar ou caminhar."},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Me alimento de forma equilibrada, evitando longos períodos sem comer."}
            
        ]
    },
    {
        id: 6,
        content:[
            {type: 'title', content: "Saúde Física", icon: <Heartbeat size={32}/>},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Tenho uma rotina mínima de sono (6 a 8 horas por noite)."},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Faço pequenas pausas para me alongar ou caminhar."},
            {type: 'paragraph', icon: <SealCheck size={32}/>, content: "Me alimento de forma equilibrada, evitando longos períodos sem comer."}
            
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

                    <p className={styles.frase}>Você <strong>não</strong> é uma máquina. Cuide de si mesmo com carinho.</p>

                    <div className={styles.linhaInfo}></div>    
            </section>
            <section className={styles.limitesSaudaveis}>
                    <div className={styles.title}>
                        <CheckFat size={32} />
                        <div className={styles.linhaVertical}>.</div>
                        <h2>Limites Saúdaveis</h2>
                    </div>
                    <div className={styles.limiteBox}>
                    {limites.map(limites =>{
                        return (< Limites 
                            key={limites.id}
                            content = {limites.content}
                            />)
                    })}
                    </div>

            </section>
            

        </div>
    )
}