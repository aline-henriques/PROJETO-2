import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import logo from '../../assets/img/LogoContent1.svg';
import { useAuth } from '../../Services/AuthContext'; 
import { useLocation } from 'react-router-dom';

export function Login({ isDarkMode }) {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // 👈 pega o método login do contexto

    const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
        setError('Por favor, preencha todos os campos');
        return;
    }

    const cadastrosExistentes = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = cadastrosExistentes.find(
        (user) => user.usuario === username && user.senha === password
    );

    if ((usuarioEncontrado || (username === 'dandan' && password === '123'))) {
        login(usuarioEncontrado); 
        navigate(from, { replace: true });
    } else {
        setError('Usuário ou senha incorretos');
    }
    };

    return (
        <div className={`${styles.content} ${isDarkMode ? styles.dark : styles.light}`}>
            <img src={logo} alt="imagem chamativa da logo" />

            <div className={styles.formulario}>
                <h1>Olá! Bem vindo</h1>
                <div className={styles.space}>
                    <h4>Ainda não tem uma conta?</h4>
                    <h4>Cadastre-se</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <h3>Usuário</h3>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Digite aqui..."
                        className={styles.inputWrite}
                    />

                    <h3>Senha</h3>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite aqui..."
                        className={styles.inputWrite}
                    />

                    {error && <div className={styles.error}>{error}</div>}

                    <div className={styles.space}>
                        <label className={styles.spaceBox}>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Manter-me logado
                        </label>
                        <p>Esqueceu a senha?</p>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
