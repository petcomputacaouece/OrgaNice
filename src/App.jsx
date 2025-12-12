import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './ui/Layout';
import { Home } from './pages/Home';
import { Perfil } from './pages/Perfil';
import { Pontos } from './pages/Pontos';
import { Modelo } from './pages/Modelo';
import  Membros  from './pages/Membros';
import Ranking from './pages/Ranking'; 

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="pontos" element={<Pontos />} />
          <Route path="modelo" element={<Modelo />} />
          <Route path="membros" element={<Membros />} />
          <Route path="ranking" element={<Ranking />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;