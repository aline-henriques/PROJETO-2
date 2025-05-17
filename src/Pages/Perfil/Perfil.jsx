import styles from '../Perfil/Perfil.module.css';
import { Header } from "../../Layouts/Header/Header";
import { useState} from 'react';
import { Pencil } from "@phosphor-icons/react";
import { useAuth } from '../../Services/AuthContext';


export function Perfil () {

    // Autenticação
    const { user } = useAuth();

    // DarkMode
    const [darkMode, setDarkMode] = useState(false);
    const toggleColors = () => setDarkMode((prev) => !prev);

    return(
        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
            
            <Header onToggleColors={toggleColors} isDarkMode={darkMode} />
        
            <header>
                <div className={styles.title}>
                    <Pencil size={45} color='orange' weight='fill' />
                    <div className={styles.linhaVertical}>.</div>
                    <h2>Editar Perfil</h2>
                </div>
            </header>
            <main>
                <div className={styles.dadosPessoais}>
                    <div className={styles.colunas}>
                        <div className={styles.dados}>
                            <h2>Meus dados Pessoais</h2>
                            <div className={styles.infos}>
                                <p>Nome</p>
                                <input type="text" />
                            </div>
                            <div className={styles.infos}>
                                <p>Usuário</p>
                                <input type="text" />
                            </div>
                            <div className={styles.infos}>
                                <p>E-Mail</p>
                                <input type="text" />
                            </div>
                            <div className={styles.infos}>
                                <p>Senha</p>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                    <div className={styles.linhaVerticalColuna}>.</div>
                    <div className={styles.fotoArea}>
                            <h3>Foto de Perfil</h3>
                            <img src={user.avatarUrl} alt="Foto Perfil" className={styles.imgUserPost}/>
                            <button>Alterar Foto</button>                           
                            <div className={styles.buttons}>
                                <button>SALVAR</button>
                                <button>SAIR</button>
                            </div>
                    </div>
                    </div>
                    
                    
                   
                </div>
                <div className={styles.diretrizes}>
                    <p>Nossas diretrizes</p>
                </div>
            </main>
        </div>
        
    )
}