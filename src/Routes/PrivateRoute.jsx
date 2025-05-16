import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Services/AuthContext';

export const PrivateRoute = () => {
    const {isAuthenticated} = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};