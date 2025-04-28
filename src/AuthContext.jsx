import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    // Verifica se o usuário está logado ao carregar a página
    const storedIsAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
    const [isAuthenticated, setIsAuthenticated] = useState(storedIsAuthenticated);

    useEffect(() => {
        // Sincroniza o estado de autenticação com o localStorage
        localStorage.setItem('isLoggedIn', isAuthenticated ? 'true' : 'false');
    }, [isAuthenticated]);

    const login = () => setIsAuthenticated(true);
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
