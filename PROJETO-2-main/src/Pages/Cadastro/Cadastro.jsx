import {React,  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Cadastro/Cadastro.module.css';
import logoContent from '../../assets/img/LogoContent1.svg'

export function Cadastro({ isDarkMode }) {
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  
  const [errors, setErrors] = useState({}); 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const novosErros = {};
    if (!nome) novosErros.nome = 'Campo obrigatório';
    if (!usuario) novosErros.usuario = 'Campo obrigatório';
    if (!email) novosErros.email = 'Campo obrigatório';
    if (!senha) novosErros.senha = 'Campo obrigatório';

    setErrors(novosErros);

 
    if (Object.keys(novosErros).length > 0) return;

   
    const novoCadastro = { nome, usuario, email, senha };
    const cadastrosExistentes = JSON.parse(localStorage.getItem('usuarios')) || [];
    localStorage.setItem('usuarios', JSON.stringify([...cadastrosExistentes, novoCadastro]));

    // Limpa campos e erros
    setNome('');
    setUsuario('');
    setEmail('');
    setSenha('');
    setErrors({});

    // Redireciona para login
    navigate('/Login');
  };

  return (
    <div className={`${styles.content} ${isDarkMode ? styles.dark : styles.light}`}>
      <img src={logoContent} alt="imagem chamativa da logo" />

     <div className={styles.formulario}>
  <h1>Bem vindo ao Dei Tilti!</h1>

  <div className={styles.space}>
    <p>Você já está registrado no site?</p>
    <a href="/Login" className={styles.linkLogin}>Faça Login</a>
  </div>

  <form onSubmit={handleSubmit}>
    <h3>Nome Completo</h3>
    <input
      type="text"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
    />
    <small className={styles.errorMessage}>
      {errors.nome || '\u00A0'}
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
  type={mostrarSenha ? 'text' : 'password'}
  value={senha}
  onChange={(e) => setSenha(e.target.value)}
/>
<small className={styles.errorMessage}>
  {errors.senha || '\u00A0'}
</small>

<div className={styles.mostrarSenha}>
  <input
    type="checkbox"
    checked={mostrarSenha}
    onChange={() => setMostrarSenha((prev) => !prev)}
    id="mostrarSenha"
  />
  <label htmlFor="mostrarSenha">Mostrar senha</label>
</div>



<div className={styles.space}>
  <button type="submit">Cadastre-se</button>
  <button type="button" className={styles.googleButton}>Entrar com o Google</button>
</div>

  </form>
</div>
    </div>
  );
}
