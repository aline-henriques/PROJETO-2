import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem('isLoggedIn') || sessionStorage.getItem('isLoggedIn');
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};