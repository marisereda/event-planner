import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';

export function App() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
