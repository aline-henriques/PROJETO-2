import { Routes, Route } from 'react-router-dom';
import { Inicio } from './Components/Inicio.jsx';
import { Questionario } from './Components/Questionario.jsx';
import { Login } from './Components/Login.jsx';
import { ProtectedRoute } from './Components/ProtectedRoute.jsx';
import { InicioLogado } from './Components/InicioLogado.jsx';

export function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/questionario" element={<Questionario />} />
            
            {/* Rota protegida */}
            <Route path="/InicioLogado" element={
                <ProtectedRoute requireAuth={true}>
                    <InicioLogado />
                </ProtectedRoute>
            } />
        </Routes>
    );
}
