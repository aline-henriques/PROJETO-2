import { Header } from './Header';
import styles from './Saude.module.css';
import { useState } from 'react';
import { Noticia } from './Noticia';
import { Recurso } from './Recurso';
import { Blueprint, Fire, Student } from "@phosphor-icons/react";
import { Suitcase } from '@phosphor-icons/react';
import { SealCheck, Heartbeat, CheckFat, User, Handshake, HandHeart, DeviceMobile } from '@phosphor-icons/react';
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
    style: 'darkOut',
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
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Estabeleço um horário fixo para começar e terminar o trabalho/estudos."},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Evito responder mensagens de trabalho/estudo fora do horário."},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Reservo pausas regulares durante o dia."}
            
        ]
    },
    {
        id: 2,
        content:[
            {type: 'title', content: "Saúde Física", icon: <Heartbeat size={32}/>},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Tenho uma rotina mínima de sono (6 a 8 horas por noite)."},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Faço pequenas pausas para me alongar ou caminhar."},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Me alimento de forma equilibrada, evitando longos períodos sem comer."}
            
        ]
    },
    {
        id: 3,
        content:[
            {type: 'title', content: "Espaço pessoal", icon: <User size={32}/>},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Tenho um espaço reservado para descansar, longe de telas e notificações."},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Digo 'não' quando estou no meu limite físico ou emocioanal."},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Respeito meu tempo livre sem culpa."}
            
        ]
    },
    {
        id: 4,
        content:[
            {type: 'title', content: "Relações Interpessoais", icon: <Handshake size={32}/>},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Evito assumir responsabilidades que não são minhas."},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Converso de forma clara quando me sinto sobrecarregado."},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Tenho ao menos uma pessoa com quem posso falar abertamente."}
            
        ]
    },
    {
        id: 5,
        content:[
            {type: 'title', content: "Autocuidado", icon: <HandHeart size={32}/>},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Reservo tempo para atividades que me dão prazer (música, leitura, arte, etc.)"},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Pratico o autocuidado sem me sentir egoista"},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Reconheço sinais de estresse no meu corpo e mente."}
            
        ]
    },
    {
        id: 6,
        content:[
            {type: 'title', content: "Ambiente Digital", icon: <DeviceMobile size={32}/>},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Tenho uma rotina mínima de sono (6 a 8 horas por noite)."},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Faço pequenas pausas para me alongar ou caminhar."},
            {type: 'paragraph', icon: <SealCheck size={32} color='green' weight='fill'/>, content: "Me alimento de forma equilibrada, evitando longos períodos sem comer."}
            
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
                        <Fire size={32} color='darkOrange' weight='fill'/>
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
                    <div className={styles.newsRecurso}>
                    {recursos.map(recurso =>{
                        return (<Recurso 
                            isDarkMode={darkMode}
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
                        <CheckFat size={32} color='blue' weight='fill' />
                        <div className={styles.linhaVertical}>.</div>
                        <h2>Limites Saúdaveis</h2>
                    </div>
                    <div className={styles.limiteBox}>
                    {limites.map(limites =>{
                        return (< Limites
                            isDarkMode={darkMode} 
                            key={limites.id}
                            content = {limites.content}
                            />)
                    })}
                    </div>

            </section>
            

        </div>
    )
}