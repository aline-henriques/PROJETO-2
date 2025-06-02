import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes/Router';
import { AuthProvider } from './Services/AuthContext';
import { PostProvider } from './Services/PostContext';
import { QuizHistoryProvider } from './Services/QuizHistoricoContext';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PostProvider>
          <QuizHistoryProvider>
            <Router />
          </QuizHistoryProvider>
        </PostProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
