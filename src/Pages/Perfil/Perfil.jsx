import styles from '../Perfil/Perfil.module.css';
import { Header } from "../../Layouts/Header/Header";
import { Posts } from '../../Components/Posts/Posts';
import { useState} from 'react';
import { Pencil, XCircle, ShieldCheck, ChartBar } from "@phosphor-icons/react";
import { useAuth } from '../../Services/AuthContext';
import { usePost } from '../../Services/PostContext';
import { NavLink, useNavigate } from 'react-router-dom';


export function Perfil () {

     // Autenticação
    const { user, setUser } = useAuth();
    const { posts } = usePost();

    //navegação
    const navigate = useNavigate();
    const handleBack = () => {
    navigate(-1); 
    };

    // troca de imagem
    const [novaImagem, setNovaImagem] = useState(null);

    const handleTrocaImagem = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
        setNovaImagem(reader.result); 
        };
        reader.readAsDataURL(file);
    }
    };

    // Alterar dados perfil
    const [alterarDados, setAlterarDados] = useState({
        name:false,
        usuario:false,
        email:false,
        senha: false,
    });
    const handleClick = (dado) => {
        setAlterarDados(prev => ({ ...prev, [dado]: !prev[dado] }));
    };
        const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };

    //salvar dados do perfil
    const [profileData , setProfileData] = useState({
        name: user.name,
        usuario: user.usuario,
        email: user.email,
        senha: user.senha,
    })
    const handleSave = () => {
    setUser(prev => ({
        ...prev,
        name: profileData.name,
        usuario: profileData.usuario,
        email: profileData.email,
        senha: profileData.senha,
        avatarUrl: novaImagem || prev.avatarUrl
    }));

    
    setAlterarDados({
        name: false,
        usuario: false,
        email: false,
        senha: false
    });

     setNovaImagem(null);
    };

    // historico de posts do usuario
    const meusPosts = posts.filter(post => post.author.name === user.name);

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
                    <div>
                        <div className={styles.colunas}>
                            <div className={styles.dados}>
                                <h2>Meus dados Pessoais</h2>
                                <div className={styles.infos}>
                                    <p>Nome</p>
                                    {!alterarDados.name && (
                                        <div className={styles.dadosUsuario}>
                                            <span>{user.name}</span>
                                            <button onClick={ () => handleClick('nome')}><Pencil size={32}/></button>
                                        </div>
                                    )}
                                    {alterarDados.name && (
                                        <div className={styles.alterarDados}>
                                            <input 
                                                type="text" 
                                                defaultValue={user.name}
                                                name='nome'
                                                value={profileData.name}
                                                onChange={handleInputChange}
                                            />
                                            <button onClick={ () => handleClick('nome')}><XCircle size={32}/></button>
                                        </div>
                                    )}
                                </div>
                            <div className={styles.infos}>
                                <p>@Usuário</p>
                                {!alterarDados.usuario && (
                                    <div className={styles.dadosUsuario}>
                                        <span>{user.usuario}</span>
                                        <button onClick={ () => handleClick('usuario')}><Pencil size={32}/></button>
                                    </div>
                                )}
                                 {alterarDados.usuario && (
                                    <div className={styles.alterarDados}>
                                        <input 
                                            type="text" 
                                            defaultValue={user.usuario}
                                            name='usuario'
                                            value={profileData.usuario}
                                            onChange={handleInputChange}
                                        />
                                        <button onClick={ () => handleClick('usuario')}><XCircle size={32}/></button>
                                    </div>
                                )}
                            </div>
                            <div className={styles.infos}>
                                <p>E-Mail</p>
                                 {!alterarDados.email && (
                                    <div className={styles.dadosUsuario}>
                                        <span>{user.email}</span>
                                        <button onClick={ () => handleClick('email')}><Pencil size={32}/></button>
                                    </div>
                                )}
                                 {alterarDados.email && (
                                    <div className={styles.alterarDados}>
                                        <input 
                                            type="text" 
                                            defaultValue={user.email}
                                            name='email'
                                            value={profileData.email}
                                            onChange={handleInputChange}
                                        />
                                        <button onClick={ () => handleClick('email')}><XCircle size={32}/></button>
                                    </div>
                                )}
                            </div>
                            <div className={styles.infos}>
                                <p>Senha</p>
                                 {!alterarDados.senha && (
                                    <div className={styles.dadosUsuario}>
                                        <span>{user.senha}</span>
                                        <button onClick={ () => handleClick('senha')}><Pencil size={32}/></button>
                                    </div>
                                )}
                                 {alterarDados.senha && (
                                    <div className={styles.alterarDados}>
                                        <input 
                                            type="text" 
                                            defaultValue={user.senha}
                                            name='senha'
                                            value={profileData.senha}
                                            onChange={handleInputChange}
                                            />
                                        <button onClick={ () => handleClick('senha')}><XCircle size={32}/></button>
                                    </div>
                                )}
                            </div>
                    </div>
                    <div className={styles.linhaVerticalColuna}>.</div>
                    <div className={styles.fotoArea}>
                            <h3>Foto de Perfil</h3>
                            <img src={novaImagem || user.avatarUrl} alt="Foto Perfil" className={styles.imgUserPost}/>

                                <input 
                                    type="file" 
                                    accept="image/*"
                                    onChange={handleTrocaImagem}
                                    className={styles.inputFile}
                                />

                            <label htmlFor="fotoUpload" className={styles.alterarFoto}>Alterar Foto</label>
                            <input 
                            type="file" 
                            id="fotoUpload" 
                            accept="image/*" 
                            onChange={handleTrocaImagem}
                            className={styles.inputFile}
                            />                           
                            <div className={styles.buttons}>
                                <button onClick={handleSave}>SALVAR</button>
                                <button onClick={handleBack}>SAIR</button>
                            </div>
                    </div>
                    </div>
                    </div>
                    <div>
                        <div className={styles.linha}></div>
                    </div>
                    <div>
                        <div className={styles.title}>
                            <h2>Histórico de Postagens no Fórum</h2>
                        </div>
                        <div className={styles.postsHistorico}>
                            {meusPosts.map(post =>{
                                return (<Posts
                                key={post.id}
                                author = {post.author}
                                content= {post.content}
                                />
                                )
                            })}
                        </div> 
                    </div>
                      
                </div>
                <div className={styles.diretrizes}>
                    <div className={styles.diretrizesInfo}>
                        <p>
                            <strong>Nossas Diretrizes </strong> 
                            de comunidade e segurança
                        </p>
                        <p>
                            <NavLink to='/diretrizes' title='ComunidadeSeguranca'>Clique aqui</NavLink>
                            para ler mais sobre nossas políticas e práticas.
                        </p>
                        <ShieldCheck size={72}/>
                        <p>Prezamos pela sua segurança, bem-estar e privacidade</p>
                    </div>
                    <div className={styles.vizuResultados}>
                        <p>
                            <NavLink to='/AcompanhamentoEmocional' title='AcompanhamentoEmocional'>
                                <strong>Vizualize seus resultados</strong>
                            </NavLink>
                            dos questionarios de saúde mental
                        </p>
                        <ChartBar size={72}/>
                    </div>
                </div>
            </main>
        </div>
        
    )
}