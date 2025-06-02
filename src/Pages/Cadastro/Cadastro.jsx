import {React,  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Cadastro/Cadastro.module.css';
import logoContent from '../../assets/img/LogoContent1.svg'

export function Cadastro({ isDarkMode }) {
  const [name, setName] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const [errors, setErrors] = useState({}); 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const novosErros = {};
    if (!name) novosErros.name = 'Campo obrigatório';
    if (!usuario) novosErros.usuario = 'Campo obrigatório';
    if (!email) novosErros.email = 'Campo obrigatório';
    if (!senha) novosErros.senha = 'Campo obrigatório';

    setErrors(novosErros);

 
    if (Object.keys(novosErros).length > 0) return;

   
    const novoCadastro = { name, usuario, email, senha };
    const cadastrosExistentes = JSON.parse(localStorage.getItem('usuarios')) || [];
    localStorage.setItem('usuarios', JSON.stringify([...cadastrosExistentes, novoCadastro]));

    // Limpa campos e erros
    setName('');
    setUsuario('');
    setEmail('');
    setSenha('');
    setErrors({});

    // Redireciona para login
    navigate('/login');
  };

  return (
    <div className={`${styles.content} ${isDarkMode ? styles.dark : styles.light}`}>
      <img src={logoContent} alt="imagem chamativa da logo" />

      <div className={styles.formulario}>
        <h1>Olá! Bem vindo</h1>
        <form onSubmit={handleSubmit}>
            <h3>Nome Completo</h3>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <small className={styles.errorMessage}>
                {errors.name || '\u00A0'}
            </small>

            <h3>Usuário</h3>
            <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />
            <small className={styles.errorMessage}>
                {errors.usuario || '\u00A0'}
            </small>

            <h3>E-mail</h3>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <small className={styles.errorMessage}>
                {errors.email || '\u00A0'}
            </small>

            <h3>Senha</h3>
            <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <small className={styles.errorMessage}>
                {errors.senha || '\u00A0'}
            </small>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
