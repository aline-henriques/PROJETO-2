import { Routes, Route } from 'react-router-dom';
import { Inicio } from './Components/Inicio.jsx';
import { Questionario } from './Components/Questionario.jsx';
import { Login } from './Components/Login.jsx';
import { ProtectedRoute } from './Components/ProtectedRoute.jsx';
import { InicioLogado } from './Components/InicioLogado.jsx';
import { ForumInicial } from './Components/ForumInicial.jsx';
import { Saude } from './Components/Saude.jsx';

export function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/questionario" element={<Questionario />} />
            <Route path='/forum' element={<ForumInicial />} />
            <Route path='/saude' element={<Saude />} />
            
            {/* Rota protegida */}
            <Route path="/InicioLogado" element={
                <ProtectedRoute requireAuth={true}>
                    <InicioLogado />
                </ProtectedRoute>
            } />
        </Routes>
    );
}
