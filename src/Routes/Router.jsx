import { Routes, Route } from 'react-router-dom';
import { Inicio } from '../Pages/Inicio/Inicio.jsx';
import { Questionario } from '../Pages/Questionario/Questionario.jsx';
import { Login } from '../Pages/Login/Login.jsx';
import { ProtectedRoute } from '../Routes/ProtectedRoute.jsx';
import { InicioLogado } from '../Components/Inicio Logado/InicioLogado.jsx';
import { ForumInicial } from '../Pages/Forum/ForumInicial.jsx';
import { Saude } from '../Pages/+Saude/Saude.jsx';
import { Perfil } from '../Pages/Perfil/Perfil.jsx';

export function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/questionario" element={<Questionario />} />
            <Route path='/forum' element={<ForumInicial />} />
            <Route path='/saude' element={<Saude />} />
            <Route path='/Perfil' element={<Perfil />} />

            {/* Rota protegida */}
            <Route path="/InicioLogado" element={
                <ProtectedRoute requireAuth={true}>
                    <InicioLogado />
                </ProtectedRoute>
            } />
        </Routes>
    );
}
