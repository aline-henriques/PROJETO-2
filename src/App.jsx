import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes/Router';
import { AuthProvider } from './Services/AuthContext';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}
