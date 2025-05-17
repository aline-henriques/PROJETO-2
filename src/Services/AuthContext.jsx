import { createContext, useContext, useState, useEffect } from "react";
import fotoPerfil from '../assets/img/Foto_perfil.jpg'; 

const AuthContext = createContext();

export function AuthProvider({ children }) {
    // Verifica dados persistidos
    const storedIsAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
    const storedUser = JSON.parse(localStorage.getItem('user'));

    const [isAuthenticated, setIsAuthenticated] = useState(storedIsAuthenticated);
    const [user, setUser] = useState(storedUser || {
        name: "Danilo Vinicius",
        avatarUrl: fotoPerfil,
        Email: "dandan@gmail.com",
        senha: "123",
        usuario: "dandan"
    });

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isAuthenticated ? 'true' : 'false');
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [isAuthenticated, user]);

    const login = (userData = {
        avatarUrl: "Danilo Vinicius",
        foto: fotoPerfil
    }) => {
        setIsAuthenticated(true);
        setUser(userData);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}