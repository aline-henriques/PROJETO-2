import { Navigate, useLocation  } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export function ProtectedRoute({  children, requireAuth = true  }) {
    const location = useLocation();
    const { isAuthenticated } = useAuth(); // Obtém o estado de autenticação do contexto

    if (requireAuth && !isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
