import { createContext, useContext, useState, useEffect } from "react";
import fotoPerfil from '../assets/img/Foto_perfil.jpg'; 

const AuthContext = createContext();

export function AuthProvider({ children }) {
    // Verifica dados persistidos
    const storedIsAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    const atualizarStatus = (novoStatus) => {
    setUser((prev) => {
        if (!prev) return null; 
        const atualizado = { ...prev, status: novoStatus };
        localStorage.setItem('user', JSON.stringify(atualizado));
        return atualizado;
    });
};

    const [isAuthenticated, setIsAuthenticated] = useState(storedIsAuthenticated);
    const [user, setUser] = useState(storedUser ?? {
        name: "Danilo Vinicius",
        avatarUrl: fotoPerfil,
        Email: "dandan@gmail.com",
        senha: "123",
        usuario: "dandan",
        status: "Sem Avaliações"
    });

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isAuthenticated ? 'true' : 'false');
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [isAuthenticated, user]);

   const login = (userData = {
       name: "Danilo Vinicius",
       avatarUrl: fotoPerfil,
       email: "dandan@gmail.com",
       senha: "123",
       usuario: "dandan",
       status: "Sem Avaliações"
    }) => {
        setIsAuthenticated(true);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
};

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
    };
    

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, setUser, atualizarStatus }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}