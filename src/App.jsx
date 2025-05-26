import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes/Router';
import { AuthProvider } from './Services/AuthContext';
import { PostProvider } from './Services/PostContext';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PostProvider>
          <Router />
        </PostProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
