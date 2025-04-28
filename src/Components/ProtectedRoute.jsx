import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth(); // Obtém o estado de autenticação do contexto

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />; // Redireciona para o login se não autenticado
    }

    return children;
}
